import { store, storage } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  addDoc,
  setDoc,
  query,
  collection,
  where,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Build } from "@/types/build";
import { BuildOrderStep } from "@/types/buildFormat";
import { validateBuildOrder } from "./buildValidation";

const DEFAULT_BUILD_STEPS: BuildOrderStep[] = [
  {
    count: 6,
    resources: {
      gold: 0,
      stone: 0,
      build: 0,
      food: 6,
      wood: 0,
    },
    task: "sheep",
    buildings: [
      {
        type: "house",
        count: 2,
      },
    ],
    type: "newVillagers",
  },
  {
    type: "newVillagers",
    count: 3,
    task: "wood",
    resources: {
      food: 6,
      stone: 0,
      gold: 0,
      build: 0,
      wood: 3,
    },
  },
  {
    resources: {
      food: 7,
      gold: 0,
      build: 0,
      stone: 0,
      wood: 3,
    },
    task: "boar",
    type: "newVillagers",
    count: 1,
  },
  {
    buildings: [
      {
        count: 2,
        type: "house",
      },
      {
        count: 1,
        type: "mill",
      },
    ],
    task: "berries",
    type: "newVillagers",
    resources: {
      build: 0,
      gold: 0,
      food: 11,
      stone: 0,
      wood: 3,
    },
    count: 4,
  },
  {
    animal: "boar",
    type: "lure",
    resources: {
      build: 0,
      gold: 0,
      wood: 3,
      stone: 0,
      food: 14,
    },
    count: 1,
  },
  {
    task: "berries",
    count: 3,
    type: "newVillagers",
    resources: {
      build: 0,
      food: 14,
      gold: 0,
      stone: 0,
      wood: 6,
    },
  },
  {
    resources: {
      build: 0,
      wood: 6,
      food: 14,
      stone: 0,
      gold: 0,
    },
    type: "research",
    tech: ["loom"],
  },
  {
    type: "ageUp",
    resources: {
      build: 0,
      wood: 6,
      gold: 0,
      food: 14,
      stone: 0,
    },
    age: "feudalAge",
  },
  {
    resources: {
      stone: 0,
      wood: 10,
      food: 10,
      gold: 0,
      build: 0,
    },
    to: "wood",
    from: "sheep",
    type: "moveVillagers",
    count: 4,
    buildings: [
      {
        type: "lumberCamp",
        count: 1,
      },
    ],
  },
  {
    type: "build",
    buildings: [
      {
        count: 1,
        type: "barracks",
      },
    ],
    resources: {
      wood: 10,
      build: 0,
      food: 10,
      stone: 0,
      gold: 0,
    },
  },
  {
    resources: {
      food: 14,
      wood: 6,
      gold: 0,
      build: 0,
      stone: 0,
    },
    type: "newAge",
    age: "feudalAge",
  },
  {
    type: "research",
    tech: ["doubleBitAxe", "horseCollar"],
    resources: {
      wood: 10,
      build: 0,
      stone: 0,
      gold: 0,
      food: 10,
    },
  },
  {
    resources: {
      build: 0,
      stone: 0,
      wood: 10,
      food: 10,
      gold: 0,
    },
    buildings: [
      {
        count: 1,
        type: "stable",
      },
    ],
    type: "build",
  },
  {
    type: "trainUnit",
    unit: "scout",
    count: 3,
    resources: {
      gold: 0,
      food: 10,
      build: 0,
      wood: 10,
      stone: 0,
    },
  },
];

function createDefaultBuildSteps(): BuildOrderStep[] {
  return DEFAULT_BUILD_STEPS.map((step) =>
    JSON.parse(JSON.stringify(step))
  ) as BuildOrderStep[];
}

interface User {
  uid: string;
}

interface UserProfile {
  email: string;
  favorites: string[];
  profile_id: string;
}

interface Rating {
  build_id: string;
  user_id: string;
  rating: number;
}

class DatabaseService {
  static async loadAllPublishedBuilds(): Promise<Build[]> {
    // Query for only builds with status 'published' or 'changed'
    const q = query(
      collection(store, "published-builds"),
      where("status", "in", ["published", "changed"])
    );
    const querySnapshot = await getDocs(q);
    const data: Build[] = [];
    querySnapshot.forEach((doc) => {
      const build = doc.data() as Build;
      build.id = doc.id;
      data.push(build);
    });
    return data;
  }

  static async loadPublishedBuildWithId(id: string): Promise<Build> {
    const docRef = doc(store, "published-builds", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const build = docSnap.data() as Build;
      build.id = docSnap.id;
      if (build.status === "published" || build.status === "changed") {
        return build;
      } else {
        throw new Error(`Build with id ${id} is not published`);
      }
    } else {
      throw new Error(`No build with id ${id}`);
    }
  }

  static async publishBuildWithId(id: string): Promise<string> {
    // Load the draft build
    const draftRef = doc(store, "builds", id);
    const draftSnap = await getDoc(draftRef);

    if (!draftSnap.exists()) {
      throw new Error(`No draft build with id ${id} found`);
    }

    const draftBuild = draftSnap.data() as Build;

    // Validate the build before publishing
    if (draftBuild.build && Array.isArray(draftBuild.build)) {
      const validationResult = validateBuildOrder(
        draftBuild.build,
        draftBuild.civilization
      );
      if (!validationResult.isValid) {
        const errorMessages = validationResult.errors
          .filter((e) => e.severity === "error")
          .map((e) => e.message)
          .join("\n");
        throw new Error(
          `Cannot publish build with validation errors:\n${errorMessages}`
        );
      }
    }

    // Copy to published-builds collection with published status
    const publishedRef = doc(store, "published-builds", id);

    // Check if published build already exists to preserve rating fields
    const publishedSnap = await getDoc(publishedRef);
    const existingPublishedBuild = publishedSnap.exists()
      ? (publishedSnap.data() as Build)
      : null;

    // Prepare the published build data
    const publishedBuildData: Partial<Build> = {
      ...draftBuild,
      status: "published",
    };

    // Preserve avg_rating and number_of_ratings if they exist in the existing published build
    if (existingPublishedBuild) {
      if (
        existingPublishedBuild.avg_rating !== undefined &&
        existingPublishedBuild.avg_rating !== null
      ) {
        publishedBuildData.avg_rating = existingPublishedBuild.avg_rating;
      }
      if (
        existingPublishedBuild.number_of_ratings !== undefined &&
        existingPublishedBuild.number_of_ratings !== null
      ) {
        publishedBuildData.number_of_ratings =
          existingPublishedBuild.number_of_ratings;
      }
    }

    await setDoc(publishedRef, publishedBuildData);

    // Update draft status to published
    await updateDoc(draftRef, { status: "published" });

    return id;
  }

  static async unpublishBuildWithId(id: string): Promise<string> {
    // Delete from published-builds collection
    const publishedRef = doc(store, "published-builds", id);
    await deleteDoc(publishedRef).catch((error) => {
      throw new Error(`Error deleting published build with id ${id}: ${error}`);
    });

    // Update draft status to draft
    const draftRef = doc(store, "builds", id);
    await updateDoc(draftRef, { status: "draft" }).catch((error) => {
      throw new Error(`Error updating draft build with id ${id}: ${error}`);
    });

    return id;
  }

  static async loadBuilds(userId?: string): Promise<Build[]> {
    // Load from builds collection (drafts)
    // If userId is provided, filter by publisher. Otherwise return all builds (admin view).
    const q =
      userId !== undefined
        ? query(collection(store, "builds"), where("publisher", "==", userId))
        : query(collection(store, "builds"));
    const querySnapshot = await getDocs(q);
    const data: Build[] = [];
    querySnapshot.forEach((doc) => {
      const build = doc.data() as Build;
      build.id = doc.id;
      data.push(build);
    });
    return data;
  }

  static async loadBuildWithId(id: string): Promise<Build> {
    const docRef = doc(store, "builds", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const build = docSnap.data() as Build;
      build.id = docSnap.id;
      return build;
    } else {
      throw new Error(`No build with id ${id}`);
    }
  }

  static async saveBuildWithId(
    buildId: string,
    buildData: Partial<Build>
  ): Promise<void> {
    // Save to builds collection (draft/working version)
    const docRef = doc(store, "builds", buildId);

    await updateDoc(docRef, buildData).catch((error) => {
      throw new Error(`Error saving build with id ${buildId}: ${error}`);
    });
  }

  static async addNewBuildForPublisher(publisher: string): Promise<string> {
    const build: Partial<Build> = {
      title: "New Build",
      civilization: "Generic",
      publisher: publisher,
      status: "draft",
      build: createDefaultBuildSteps(),
    };
    const docRef = await addDoc(collection(store, "builds"), build);
    return docRef.id;
  }

  static async deleteBuildWithId(id: string): Promise<void> {
    // Delete from both collections
    const draftRef = doc(store, "builds", id);
    await deleteDoc(draftRef).catch((error) => {
      throw new Error(`Error deleting draft build with id ${id}: ${error}`);
    });

    // Try to delete from published-builds (may not exist)
    try {
      const publishedRef = doc(store, "published-builds", id);
      await deleteDoc(publishedRef);
    } catch {
      // Ignore error if published version doesn't exist
    }
  }

  static async loadPublishedVersionOfBuild(id: string): Promise<Build | null> {
    try {
      const docRef = doc(store, "published-builds", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const build = docSnap.data() as Build;
        build.id = docSnap.id;
        return build;
      }
      return null;
    } catch {
      return null;
    }
  }

  static async getListOfAllAvailableImages(): Promise<string[]> {
    const imagesRef = ref(storage, "Images");
    const images: string[] = [];

    await listAll(imagesRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          images.push(itemRef.name.slice(0, -4));
        });
      })
      .catch((error) => {
        throw new Error(`Couldn't get all available images: ${error}`);
      });

    return images;
  }

  static async getImageURLWithName(name: string): Promise<string> {
    return await getDownloadURL(ref(storage, `Images/${name}.png`))
      .then((url) => {
        return url;
      })
      .catch((error) => {
        throw new Error(
          `Not able to get URL for image with name: ${name} - Error: ${error}`
        );
      });
  }

  static async loadProfileInfo(user: User): Promise<UserProfile> {
    const docRef = doc(store, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data() as UserProfile;
      return userData;
    } else {
      throw new Error(`No user with id ${user.uid} found`);
    }
  }

  static async saveProfileInfo(
    user: User,
    email: string,
    profileId: string
  ): Promise<void> {
    const docRef = doc(store, "users", user.uid);

    const userData = { email: email, profile_id: profileId };

    await updateDoc(docRef, userData).catch((error) => {
      throw new Error(
        `Error saving profile info for user with id ${user.uid}: ${error}`
      );
    });
  }

  // FAV BUILDS
  static async favBuildWithIdForUser(id: string, user: User): Promise<void> {
    const docRef = doc(store, "users", user.uid);

    try {
      await updateDoc(docRef, {
        favorites: arrayUnion(id),
      });
    } catch (error) {
      // If user document doesn't exist, create it with the favorite
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          favorites: [id],
          email: "",
          profile_id: "",
        });
      } else {
        throw new Error(`Error favoring build with id ${id}: ${error}`);
      }
    }
  }

  static async removeFavBuildWithIdForUser(
    id: string,
    user: User
  ): Promise<void> {
    const docRef = doc(store, "users", user.uid);

    try {
      await updateDoc(docRef, {
        favorites: arrayRemove(id),
      });
    } catch (error) {
      // If user document doesn't exist, create it without the favorite (empty array)
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          favorites: [],
          email: "",
          profile_id: "",
        });
      } else {
        throw new Error(
          `Error removing favorite build with id ${id}: ${error}`
        );
      }
    }
  }

  // RATINGS
  static async rateBuildWithIdForUser(
    id: string,
    user: User,
    rating: number
  ): Promise<string> {
    const docRef = doc(store, "ratings", `rating-${id}-${user.uid}`);
    const data = { build_id: id, user_id: user.uid, rating: rating };

    await setDoc(docRef, data).catch((error) => {
      throw new Error(`Error rating build with id ${id}: ${error}`);
    });

    return docRef.id;
  }

  static async loadUserRatingForBuild(
    buildId: string,
    userId: string
  ): Promise<Rating> {
    const docRef = doc(store, "ratings", `rating-${buildId}-${userId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as Rating;
    } else {
      throw new Error(
        `No rating for build with id ${buildId} and user ${userId}`
      );
    }
  }
}

export default DatabaseService;
