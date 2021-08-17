const express = require("express");
const router = express.Router();
const axios = require("axios");
const { firebase, db } = require("../../firebase");
require("dotenv").config();
// get recipes
const url = process.env.API_URL;
const id = process.env.API_ID;
const key = process.env.API_KEY;
const recipeRef = db.collection("recipes");

// get specific recipe from firebase
router.get("/recipes/saved", async (req, res) => {
  const { saved } = req.query;
  await Promise.all(
    saved.map(async (ref, index) => {
      const docRef = db.doc(ref);
      return await docRef.get().then((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    })
  ).then((results) => {
    return res.json(results);
  });
});

router.get("/recipes/created", async (req, res) => {
  const { created } = req.query;
  await Promise.all(
    created.map(async (ref, index) => {
      const docRef = db.doc(ref);
      return await docRef.get().then((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    })
  ).then((results) => {
    return res.json(results);
  });
});

router.get("/recipes/completed", async (req, res) => {
  const { completed } = req.query;
  await Promise.all(
    completed.map(async (ref, index) => {
      const docRef = db.doc(ref);
      return await docRef.get().then((doc) => {
        return doc.data();
      });
    })
  ).then((results) => {
    return res.json(results);
  });
});

router.get("/recipes/all", async (req, res) => {
  await recipeRef
    .get()
    .then((querySnapshots) => {
      const recipeList = [];
      querySnapshots.forEach((doc, index) => {
        recipeList.push({ ...doc.data(), id: doc.id });
      });
      return recipeList;
    })
    .then((results) => {
      return res.json(results);
    });
});

// gets first 20 recipes
// don't call this unless you need to refresh the database
// router.get("/recipes-all", async (req, res) => {
//   const response = await axios.get(url, {
//     params: {
//       type: "public",
//       app_id: id,
//       app_key: key,
//       q: "e",
//     },
//   });

//   var arr = response.data.hits;

//   for (let i = 0; i < 20; i++) {
//     let data = arr[i].recipe;
//     await recipeRef.doc().set({
//       label: data.label ? data.label : "",
//       img: data.image ? data.image : "",
//       servings: data.yield ? data.yield : "",
//       dietLabels: data.dietLabels ? data.dietLabels : "",
//       healthLabels: data.healthLabels ? data.healthLabels : "",
//       cautions: data.cautions ? data.cautions : "",
//       ingredients: data.ingredients ? data.ingredients : "",
//       calories: data.calories ? data.ingredients : "",
//       time: data.totalTime ? data.totalTime : "",
//       mealType: data.mealType ? data.mealType : "",
//       cuisineType: data.cuisineType ? data.cuisineType : "",
//       dishType: data.dishType ? data.dishType : "",
//     });
//   }
// });

module.exports = router;
