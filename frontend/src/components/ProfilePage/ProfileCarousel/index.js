import { React, useEffect, useState } from "react";
import RecipeCard from "../../RecipeCard";
import "./styles.css";
const axios = require("axios");

const ProfileCarousel = (props) => {
  const { user } = props;
  const [created, setCreated] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const createdRes = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/created`,
        {
          params: { created: user.recipesCreated },
        }
      );
      const completeRes = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/completed`,
        {
          params: { completed: user.recipesCompleted },
        }
      );
      if (createdRes.data) {
        setCreated(createdRes.data);
        if (completeRes.data) {
          setCompleted(completeRes.data);
        }
        setLoading(true);
      }
    };
    fetch();
  }, [user.recipesCreated, user.recipesCompleted]);

  return (
    isLoading && (
      <>
        <div className="user-featuring-container">
          <div className="user-featuring-header">My Creations:</div>
          <div className="featuring-carousel-container">
            <div className="featuring-carousel">
              {created.map((recipe, _) => {
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
        <div className="user-featuring-container">
          <div className="user-featuring-header">Completed Recipes:</div>
          <div className="featuring-carousel-container">
            <div className="featuring-carousel">
              {completed.map((recipe, _) => {
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

export default ProfileCarousel;
