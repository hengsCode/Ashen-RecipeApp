import { React } from "react";
import "./styles.css";
import { BookmarkBorder, LibraryBooks } from "@material-ui/icons";

const ProfileUserCard = (props) => {
  const { user } = props;
  return (
    <>
      <div className="user-details-container">
        <div className="avatar-example">
          <img src={user.profilePicture} alt="" />
          <div className="user-button-container">
            <div className="user-button">
              <LibraryBooks class="user-collection-icon" />
              Completed
            </div>
            <div className="user-button">
              <BookmarkBorder class="user-collection-icon" />
              Saved
            </div>
          </div>
        </div>
        <div className="user-details">
          <div className="user-name">
            {user.firstName} {user.lastName}
          </div>
          <div className="user-about">{user.about}</div>
        </div>
        <div className="user-statistics-container">
          <div className="user-statistic-content">
            <div className="user-statistic-value">
              {user.recipesCreated.length}
            </div>
            <div className="user-statistic-label">Created</div>
          </div>
          <div className="user-statistic-content">
            <div className="user-statistic-value">
              {user.recipesCompleted.length}
            </div>
            <div className="user-statistic-label">Completed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUserCard;
