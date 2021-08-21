import { React } from "react";
import "./styles.css";
import { Edit } from "@material-ui/icons";

const ProfileUserCard = (props) => {
  const { user } = props;
  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <div className="user-profile-edit-button">Edit Profile</div>
      </div>
      <div className="user-profile-content">
        <div className="user-details-outer-container">
          <div className="user-details-container">
            <img className="avatar-example" src={user.profilePicture} alt="" />
            <div className="user-name">
              {user.firstName} {user.lastName}
            </div>
            <div className="user-profile-buttons-container">
              <div className="user-profile-button">
                <img
                  className="user-created-icon"
                  src="https://img-premium.flaticon.com/png/512/296/premium/296673.png?token=exp=1629550390~hmac=7c0baf8dfadb1b78af6067e273c3097a"
                  alt=""
                />
                <div className="user-stat-value">
                  {user.recipesCreated.length}&nbsp;
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
                  {user.recipesCompleted.length}&nbsp;
                  <div className="user-stat-label">completed</div>
                </div>
              </div>
            </div>
            <div className="user-about">{user.about}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserCard;
