import axios from "axios";
import { React, useEffect, useState } from "react";
import { TextArea, TextBox } from "../../common";
import "./styles.css";

const EditProfileModal = (props) => {
  const { user, close } = props;
  const [details, setDetails] = useState(user);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const outer = document.querySelector(".edit-modal-container");
    const inner = document.querySelector(".edit-modal-content");
    outer.addEventListener("click", (e) => {
      if (!inner.contains(e.target)) {
        close();
      }
    });
    outer.style.backgroundColor = "var(--primary-fader)";
    inner.style.transform = "translateY(0)";
    inner.style.opacity = 1;
  });

  const handleSubmit = async () => {
    if (user !== details) {
      await axios
        .post(`${process.env.REACT_APP_API_URL}/profile-edit`, null, {
          params: {
            user: details,
          },
        })
        .then((response) => {
          console.log(response.status);
        })
        .then(close());
    } else {
      console.log("here");
      close();
    }
  };

  const handleFirstNameChange = (e) => {
    setDetails({ ...details, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setDetails({ ...details, lastName: e.target.value });
  };
  const handleAboutChange = (e) => {
    setDetails({ ...details, about: e.target.value });
  };

  return (
    <div className="edit-modal-container">
      <div className="edit-modal-content">
        <div className="edit-modal-header-container">
          <div className="edit-modal-header">Edit Profile</div>
          <div className="edit-modal-button" onClick={handleSubmit}>
            Save
          </div>
          <div className="edit-modal-button" onClick={close}>
            Cancel
          </div>
        </div>
        <div className="edit-modal-grid">
          <img
            className="edit-profile-picture"
            src={details.profilePicture}
            alt=""
          />
          <div className="edit-modal-right">
            <div className="edit-profile-name-container">
              <TextBox
                label="first name"
                value={details.firstName}
                onChange={handleFirstNameChange}
              />
              <TextBox
                label="last name"
                value={details.lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <TextArea
              label="overview"
              value={details.about}
              onChange={handleAboutChange}
            />
            <TextArea label="categories" value={details.preferences} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
