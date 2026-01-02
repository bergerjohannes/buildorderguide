const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// We recalculate the aggregated ratings on publish if the build is newly published
// this is because we don't want to lose ratings in case someone unpublishes and then publishes again
exports.recalculateAggregatedRatingsOnPublish = functions.firestore
  .document("published-builds/{docId}")
  .onWrite(async (change, context) => {
    const db = admin.firestore();
    const publishedBuildRef = db
      .collection("published-builds")
      .doc(context.params.docId);

    if (change.before.data() === undefined) {
      const buildRatingQuery = db
        .collection("ratings")
        .where("build_id", "==", context.params.docId);
      const snapshot = await buildRatingQuery.get();

      if (snapshot.empty) return;

      let numberOfRatings = 0;
      let ratingTotal = 0;
      snapshot.forEach((doc) => {
        numberOfRatings++;
        ratingTotal += doc.data().rating;
      });

      const avgRating = ratingTotal / numberOfRatings;
      return publishedBuildRef.update({
        avg_rating: avgRating,
        number_of_ratings: numberOfRatings,
      });
    }
  });

exports.aggregateRatings = functions.firestore
  .document("ratings/{docId}")
  .onWrite(async (change, context) => {
    const newRating = change.after.data().rating;
    const buildId = change.after.data().build_id;

    const db = admin.firestore();
    const publishedBuildRef = db.collection("published-builds").doc(buildId);

    await db.runTransaction(async (transaction) => {
      const buildRatingDoc = await transaction.get(publishedBuildRef);

      if (buildRatingDoc.exists) {
        let numberOfRatings = buildRatingDoc.data().number_of_ratings;
        let oldRatingTotal =
          buildRatingDoc.data().avg_rating *
          buildRatingDoc.data().number_of_ratings;
        if (
          numberOfRatings !== null &&
          numberOfRatings !== undefined &&
          oldRatingTotal !== null &&
          oldRatingTotal !== undefined
        ) {
          if (change.before.data() !== undefined) {
            // If we have a previous data entry -> this is an updated rating
            const oldRating = change.before.data().rating;
            oldRatingTotal -= oldRating;
          } else {
            numberOfRatings++;
          }

          const newAvgRating = (oldRatingTotal + newRating) / numberOfRatings;
          transaction.update(publishedBuildRef, {
            avg_rating: newAvgRating,
            number_of_ratings: numberOfRatings,
          });
        } else {
          transaction.update(publishedBuildRef, {
            avg_rating: newRating,
            number_of_ratings: 1,
          });
        }
      }
    });
  });
