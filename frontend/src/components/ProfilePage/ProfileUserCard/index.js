import { React, useState } from "react";
import "./styles.css";
import EditProfileModal from "../EditProfileModal";

const ProfileUserCard = (props) => {
  const { user } = props;
  const [modal, setModal] = useState(false);

  const handleEdit = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (modal) {
      document.body.style.overflow = "";
      const outer = document.querySelector(".edit-modal-container");
      const modal = document.querySelector(".edit-modal-content");
      modal.style.transform = "translateY(-200%)";
      modal.style.opacity = 0.5;
      outer.style.backgroundColor = "transparent";
      setTimeout(() => setModal(!modal), 600);
    } else {
      setModal(!modal);
    }
  };

  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-header" />
        <div className="user-profile-content">
          <div className="user-profile-edit-button" onClick={handleEdit}>
            Edit Profile
          </div>
          <div className="user-details-outer-container">
            <div className="user-details-container">
              <img
                className="avatar-example"
                src={user.profilePicture}
                alt=""
              />
              <div className="user-name">
                {user.firstName} {user.lastName}
              </div>
              <div className="user-profile-buttons-container">
                <div className="user-profile-button">
                  <img
                    className="user-created-icon"
                    src="https://image.flaticon.com/icons/png/512/296/296673.png"
                    alt=""
                  />
                  <div className="user-stat-value">
                    {user.createdNum}&nbsp;
                    <div className="user-stat-label">created</div>
                  </div>
                </div>
                <div className="user-profile-button">
                  <img
                    className="user-complete-icon"
                    src="https://image.flaticon.com/icons/png/512/3388/3388530.png"
                    alt=""
                  />
                  <div className="user-stat-value">
                    {user.completedNum}&nbsp;
                    <div className="user-stat-label">completed</div>
                  </div>
                </div>
              </div>
              <div className="user-about">{user.about}</div>
            </div>
          </div>
        </div>
      </div>
      {modal && <EditProfileModal user={user} close={handleEdit} />}
    </>
  );
};

export default ProfileUserCard;
