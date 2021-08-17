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

module.exports = router;
