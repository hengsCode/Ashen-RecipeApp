import { React, useEffect, useState } from "react";
import RecipeCard from "../../RecipeCard";
import "./styles.css";
const axios = require("axios");

const ProfileFeaturing = (props) => {
  const { user } = props;
  const [created, setCreated] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/created`,
        {
          params: { created: user.recipesCreated },
        }
      );
      if (response.data) {
        setCreated(response.data);
        setLoading(true);
      }
    };
    fetch();
  }, []);

  return (
    isLoading && (
      <>
        <div className="user-featuring-container">
          <div className="user-featuring-header">My Creations:</div>
          <div className="featuring-carousel-container">
            <div className="featuring-carousel">
              {created.map((recipe, index) => {
                return (
                  <>
                    <div className="featuring-carousel-item">
                      <RecipeCard recipe={recipe} />
                    </div>
                    <div className="featuring-carousel-item">
                      <RecipeCard recipe={recipe} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProfileFeaturing;
