import { React, useEffect, useState } from "react";
import "./styles.css";
import firebase from "../../firebase";

const db = firebase.firestore();

const Profile = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const docRef = db.collection("users").doc("SPWxu86yte1HPShqcxMn");
      await docRef.get().then((doc) => setUser(doc.data()));
      setLoading(true);
    };

    fetch();
  }, []);

  return (
    isLoading && (
      <>
        <div className="profile-page-container">
          <div className="profile-page-content">
            <div className="profile-page-user-details">
              <div className="avatar-example">
                <img src={user.profilePicture} alt="" />
              </div>
              <div className="user-details">
                <div className="user-name">{`${user.firstName} ${user.lastName}`}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
