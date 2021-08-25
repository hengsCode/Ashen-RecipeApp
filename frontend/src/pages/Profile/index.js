import { React, useEffect, useState } from "react";
import "./styles.css";
import ProfileUserCard from "../../components/ProfilePage/ProfileUserCard";
import ProfileCarousel from "../../components/ProfilePage/ProfileCarousel";
const { db } = require("../../firebase");

// const axios = require("axios");
const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [userContent, setUserContent] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      // const response = await axios.get(
      //   `${process.env.REACT_APP_API_URL}/profile`
      // );
      const docRef = db.collection("users").doc("SPWxu86yte1HPShqcxMn");
      await docRef.onSnapshot((doc) => {
        let data = doc.data();
        const responseObject = { ...data, id: doc.id };
        if (responseObject) {
          const {
            firstName,
            lastName,
            recipesCreated,
            recipesCompleted,
            recipesSaved,
            about,
            profilePicture,
            preferences,
            id,
          } = responseObject;
          setUserDetails({
            id: id,
            firstName: firstName,
            lastName: lastName,
            about: about,
            profilePicture: profilePicture,
            preferences: preferences,
            createdNum: recipesCreated.length,
            completedNum: recipesCompleted.length,
          });
          setUserContent({
            recipesCreated: recipesCreated,
            recipesSaved: recipesSaved,
            recipesCompleted: recipesCompleted,
          });
          setLoading(true);
        } else {
          console.log("Undefined error");
        }
      });
    };
    fetch();
  }, []);

  return (
    isLoading && (
      <>
        <div className="profile-page-container">
          <ProfileUserCard user={userDetails} />
          <ProfileCarousel user={userContent} />
        </div>
      </>
    )
  );
};

export default Profile;
