import { store, storage } from './FirebaseService.js'
import { doc, getDoc, getDocs, updateDoc, addDoc, setDoc, query, collection, where, deleteDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { ref, listAll } from 'firebase/storage'
import * as Constants from './Constants'

class DatabaseService {

    // PUBLISHED BUILDS
    static async loadAllPublishedBuilds() {
        let q = query(collection(store, 'published-builds'))
        const querySnapshot = await getDocs(q)
        let data = []
        querySnapshot.forEach((doc) => {
            let build = doc.data()
            build.id = doc.id
            data.push(build)
        })
        return data
    }

    static async loadPublishedBuildWithId(id) {
        const docRef = doc(store, 'published-builds', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let build = docSnap.data()
            build.id = docSnap.id
            return build
        } else {
            throw new Error(`No build with id ${id}`)
        }
    }

    // BUILDS FOR BUILDER

    static async publishBuildWithId(id, data) {
        const docRef = doc(store, 'published-builds', id)

        await setDoc(docRef, data).then(() => {
            console.log(`Published build with id ${id}`)
        })
            .catch((error) => {
                console.error(`Error publishing build with id ${id}: ${error}`)
            })

        return docRef.id
    }

    static async unpublishBuildWithId(id) {
        const docRef = doc(store, 'published-builds', id)

        await deleteDoc(docRef).then(() => {
            console.log(`Unpublished build with id ${id}`)
        })
            .catch((error) => {
                console.error(`Error unpublishing build with id ${id}: ${error}`)
            })
        return docRef.id
    }

    static async loadAllBuildsForAdmin() {
        let q = query(collection(store, 'builds'))
        const querySnapshot = await getDocs(q)
        let data = []
        querySnapshot.forEach((doc) => {
            let build = doc.data()
            build.id = doc.id
            data.push(build)
        })
        return data
    }

    static async loadAllBuildsForPublisher(userId) {
        let q = userId !== undefined ? query(collection(store, 'builds'), where('publisher', '==', userId)) : query(collection(store, 'builds'))
        const querySnapshot = await getDocs(q)
        let data = []
        querySnapshot.forEach((doc) => {
            let course = doc.data()
            course.id = doc.id
            data.push(course)
        })
        return data
    }

    static async loadBuildWithId(id) {
        const docRef = doc(store, 'builds', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let build = docSnap.data()
            build.id = docSnap.id
            return build
        } else {
            throw new Error(`No build with id ${id}`)
        }
    }

    static async saveBuildWithId(buildId, buildData) {
        const docRef = doc(store, 'builds', buildId)

        await updateDoc(docRef, buildData).then(() => {
            console.log('Saved build')
        })
            .catch((error) => {
                console.error(`Error saving build with id ${buildId}: ${error}`)
            })
    }

    static async addNewBuildforPublisher(publisher) {
        const build = [
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Sheep,
                count: 6,
                buildings: [
                    {
                        type: Constants.Building.House,
                        count: 2
                    }
                ],
                resources: {
                    food: 6,
                    wood: 0,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Wood,
                count: 4,
                resources: {
                    food: 6,
                    wood: 4,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Boar,
                count: 1,
                resources: {
                    food: 7,
                    wood: 4,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            },
            {
                type: Constants.StepType.NewVillagers,
                task: Constants.Task.Berries,
                count: 4,
                buildings: [
                    {
                        type: Constants.Building.House,
                        count: 2
                    }, {
                        type: Constants.Building.Mill,
                        count: 1
                    }
                ],
                resources: {
                    food: 11,
                    wood: 4,
                    stone: 0,
                    gold: 0,
                    build: 0
                }
            }
        ]

        const data = {
            title: 'New Build',
            civilization: Constants.Civ.Generic,
            publisher: publisher,
            status: Constants.PublishStatus.Draft,
            build: build
        }

        console.log(data)

        const docRef = await addDoc(collection(store, 'builds'), data)
        return docRef.id
    }

    static async getListOfAllAvailableImages() {
        const imagesRef = ref(storage, 'Images')
        let images = []

        await listAll(imagesRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    images.push(itemRef.name.slice(0, -4))
                })
            }).catch((error) => {
                throw new Error(`Couldn't get all available image: ${error}`)
            })

        return images
    }

    // PROFILE

    static async loadProfileInfo(user) {
        const docRef = doc(store, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let userData = docSnap.data()
            return userData
        } else {
            throw new Error(`No user with id ${user.uid} found`)
        }
    }

    static async saveProfileInfo(user, email, profileId) {
        const docRef = doc(store, 'users', user.uid)

        const userData = { 'email': email, 'profile_id': profileId }

        await updateDoc(docRef, userData).then(() => {
            console.log('Saved profile info')
        })
            .catch((error) => {
                console.error(`Error saving profile info for user with id ${user.uid}: ${error}`)
            })
    }

    // FAV BUILDS

    static async favBuildWithIdForUser(id, user) {
        console.log(`Fav build with id ${id} for user with id ${user.uid}`)
        const docRef = doc(store, 'users', user.uid)

        await updateDoc(docRef, {
            favorites: arrayUnion(id)
        })
            .catch((error) => {
                console.error(`Error favoring build with id ${id}: ${error}`)
            })
    }

    static async removeFavBuildWithIdForUser(id, user) {
        console.log(`Remove fav build with id ${id} for user with id ${user.uid}`)
        const docRef = doc(store, 'users', user.uid)

        await updateDoc(docRef, {
            favorites: arrayRemove(id)
        })
            .catch((error) => {
                console.error(`Error removing favorite build with id ${id}: ${error}`)
            })
    }
}
export default DatabaseService