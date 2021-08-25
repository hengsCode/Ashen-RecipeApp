import { React } from "react";
import MethodOverview from "./MethodOverview";
import IngredientCheckList from "./IngredientCheckList";
import "./styles.css";

const recipe = {
  ingredients: [
    {
      text: "8 ounces campanelle (ruffle-edged pasta) or orecchiette",
      foodCategory: "grains",
      image: null,
      foodId: "food_a8hs60uayl5icia1qe8qoba1kwp8",
      weight: 226.796185,
    },
    {
      foodId: "food_bd97wcfb5tcjnybmibiyeaqrernd",
      foodCategory: "Cured meats",
      image:
        "https://www.edamam.com/food-img/a4b/a4ba02f547d69f0ab89ae266903f1e49.jpg",
      weight: 113.3980925,
      text: "1 thick slice baked ham (about 4 ounces), cut into 1-inch-long matchsticks",
    },
    {
      foodId: "food_avtcmx6bgjv1jvay6s6stan8dnyp",
      weight: 8.499999999856291,
      foodCategory: "vegetables",
      text: "1 tablespoon minced garlic",
      image:
        "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
    },
    {
      text: "2 large leeks, white and pale-green parts only, cleaned, split lengthwise, and thinly sliced crosswise",
      foodId: "food_a27jevnb06c1m9ax7k41xbbcwcuo",
      foodCategory: "vegetables",
      weight: 222.5,
      image:
        "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg",
    },
    {
      weight: 982.5000000000001,
      foodCategory: "plant-based protein",
      image:
        "https://www.edamam.com/food-img/a39/a39102018ed39c6008134e0570af8a6c.jpg",
      text: "2 cans cannellini beans, rinsed and drained",
      foodId: "food_bggwvu5a6s0gniamjy6r1aoknilo",
    },
    {
      foodCategory: "canned soup",
      foodId: "food_axg87lea13vni7a0lc9adauqgcs9",
      image:
        "https://www.edamam.com/food-img/2eb/2eb3c708f58f5fa1543022650ff0ae8d.png",
      text: "2 cans (14.5 ounces each) low-sodium chicken stock, skimmed of fat",
      weight: 822.136170625,
    },
    {
      text: "3 scallions, thinly sliced",
      foodId: "food_bknlkyzbuzo27pb11whr4bttkuy6",
      weight: 45,
      image:
        "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg",
      foodCategory: "vegetables",
    },
    {
      text: "1/4 teaspoon freshly ground pepper",
      weight: 0.725,
      image:
        "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
      foodCategory: "Condiments and sauces",
      foodId: "food_b6ywzluaaxv02wad7s1r9ag4py89",
    },
    {
      image:
        "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg",
      foodCategory: "vegetables",
      weight: 6,
      foodId: "food_btg1uzjak79lawbirsitkaeai60l",
      text: "2 tablespoons finely chopped chives",
    },
    {
      foodId: "food_a104ppxa06d3emb272fkcab3cugd",
      foodCategory: "Cheese",
      image:
        "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg",
      text: "1 ounce freshly grated Parmesan cheese (optional)",
      weight: 28.349523125,
    },
    {
      weight: 4.5,
      foodCategory: "Oils",
      foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
      text: "Olive-oil, cooking spray",
      image: null,
    },
  ],
  time: "60",
  img: "https://www.edamam.com/web-img/131/131f2ad00f9e9b8c30ecd9dcfe1f9b92.jpg",
  label: "Healthy Pasta E Fagioli",
  id: "8FLJrMLSjYbUXz7KJXpT",
};

const RecipeStart = (_) => {
  //   const { recipe } = props;
  return (
    <div className="recipe-start-background">
      <div className="recipe-start-first">
        <div className="recipe-start-header">
          <img className="recipe-start-image" src={recipe.img} alt="" />
          <div className="recipe-start-label">{recipe.label}</div>
        </div>
        <IngredientCheckList ingredients={recipe.ingredients} />
      </div>
      <div className="recipe-start-second">
        <MethodOverview methods={recipe.methods} />
      </div>
    </div>
  );
};

export default RecipeStart;
