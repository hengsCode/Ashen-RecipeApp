const express = require("express");
const { db } = require("../../firebase");

const router = express.Router();

// You can require and use your routes here ;)
router.get("/profile", async (req, res) => {
  const docRef = db.collection("users").doc("SPWxu86yte1HPShqcxMn");
  await docRef.get().then((doc) => {
    let data = doc.data();
    const responseObject = { ...data, id: doc.id };
    return res.json(responseObject);
  });
});

router.post("/profile-edit", async (req, res) => {
  const user = JSON.parse(req.query.user);
  const { firstName, lastName, id, about } = user;
  const docRef = db.collection("users").doc(user.id);
  await docRef.set(
    {
      firstName: firstName,
      lastName: lastName,
      about: about,
    },
    { merge: true }
  );
});

module.exports = router;
