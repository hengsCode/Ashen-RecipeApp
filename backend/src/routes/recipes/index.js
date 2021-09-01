const express = require("express");
const router = express.Router();
const { db } = require("../../firebase");
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
        return { ...doc.data(), id: doc.id };
      });
    })
  ).then((results) => {
    return res.json(results);
  });
});

router.get("/recipes/all", async (req, res) => {
  await recipeRef
    .get()
    .then((querySnapshot) => {
      const recipeList = [];
      querySnapshot.forEach((doc, index) => {
        recipeList.push({ ...doc.data(), id: doc.id });
      });
      return recipeList;
    })
    .then((result) => {
      return res.json(result);
    });
});

router.get("/recipes/filtered", async (req, res) => {
  const { filter, type } = req.query;
  if (type === "cuisines") {
    await recipeRef
      .where("cuisineType", "array-contains", filter)
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          recipeList.push({ ...doc.data(), id: doc.id });
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else if (type === "mealType") {
    await recipeRef
      .where("mealType", "array-contains", filter)
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          recipeList.push({ ...doc.data(), id: doc.id });
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else if (type === "dietary needs") {
    await recipeRef
      .where("dietLabels", "array-contains", filter)
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          recipeList.push({ ...doc.data(), id: doc.id });
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else if (type === "search") {
    await recipeRef
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          if (doc.data().label.toLowerCase().includes(filter)) {
            recipeList.push({ ...doc.data(), id: doc.id });
          }
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else if (type === "all") {
    await recipeRef
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          recipeList.push({ ...doc.data(), id: doc.id });
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else if (type === "custom") {
    await recipeRef
      .where("difficulty", "==", "easy")
      .where("time", "<", 30)
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          recipeList.push({ ...doc.data(), id: doc.id });
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else if (type === "dish type") {
    await recipeRef
      .where("dishType", "array-contains", filter)
      .get()
      .then((querySnapshot) => {
        const recipeList = [];
        querySnapshot.forEach((doc, index) => {
          recipeList.push({ ...doc.data(), id: doc.id });
        });
        return recipeList;
      })
      .then((result) => {
        return res.json(result);
      });
  } else {
    console.log("Not yet implemented:");
    console.log(filter, type);
  }
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
//       calories: data.calories ? data.calories : "",
//       time: data.totalTime ? data.totalTime : "",
//       mealType: data.mealType ? data.mealType : "",
//       cuisineType: data.cuisineType ? data.cuisineType : "",
//       dishType: data.dishType ? data.dishType : "",
//     });
//   }
// });

module.exports = router;
