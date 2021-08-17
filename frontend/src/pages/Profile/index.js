import { React, useEffect, useState } from "react";
import "./styles.css";
import ProfileUserCard from "../../components/ProfilePage/ProfileUserCard";
import ProfileFeaturing from "../../components/ProfilePage/ProfileFeaturing";

const axios = require("axios");
const Profile = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`
      );
      if (response.data) {
        setUser(response.data);
        setLoading(true);
      } else {
        console.log("Undefined error");
      }
    };

    fetch();
  }, []);

  return (
    isLoading && (
      <>
        <div className="profile-page-container">
          <ProfileUserCard user={user} />
          <ProfileFeaturing user={user} />
        </div>
      </>
    )
  );
};

export default Profile;
