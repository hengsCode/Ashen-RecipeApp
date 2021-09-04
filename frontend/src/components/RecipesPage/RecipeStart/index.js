import { React } from "react";
import MethodOverview from "./MethodOverview";
import IngredientCheckList from "./IngredientCheckList";
import { ThumbUp, RoomService, Schedule } from "@material-ui/icons";
import "./styles.css";
import RecipeScrollingComponent from "./RecipeScrollingComponent";

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
      foodId: "food_a104ppxa06d3emb272fkcab3cugd",
      foodCategory: "Cheese",
      image:
        "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg",
      text: "1 ounce freshly grated Parmesan cheese (optional)",
      weight: 28.349523125,
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
  methods: [
    {
      step: "Bring a large pot to medium heat. Add the olive oil, carrots, onions and garlic. Cook 7 minutes until the carrots and other veggies are soft.",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      notes: "You might want to leave it out for a few seconds just in case",
    },
    {
      step: "Add the ground turkey with Italian seasoning, red pepper flakes, salt and pepper to the pot. Break up the meat with a spatula as it browns.",
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg",
      notes: "You might want to leave it to rest for a few seconds",
    },
    {
      step: "Once the meat browns, add the tomato sauce, diced tomatoes with juices, chicken broth and chickpea elbow pasta. Cover and bring the pot to a boil. Once boiling, reduce to a medium simmer. Simmer for 20 minutes.",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
    },
    {
      step: "Remove the cover and stir to check that the pasta is cooked. Drain the canned beans, and rinse then add to the pot with the parmesan and spinach. Stir to combine. Cook another 2-3 minutes then serve!",
      notes: "You might want to leave it to rest for a few seconds",
    },
    {
      step: "Store the pasta e fagioli in the refrigerator up to 7 days or in the freezer up to 30 days.",
      img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg",
    },
  ],
  servings: 4,
  time: 60,
  difficulty: "easy",
  img: "https://www.edamam.com/web-img/131/131f2ad00f9e9b8c30ecd9dcfe1f9b92.jpg",
  label: "Healthy Pasta E Fagioli",
  id: "8FLJrMLSjYbUXz7KJXpT",
};

const RecipeStart = (_) => {
  //   const { recipe } = props;

  const handleStart = () => {
    const container = document.querySelector(".recipe-start-header");
    document.documentElement.scrollTo({
      top: container.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="recipe-start-background">
        <div className="recipe-start-header">
          <div className="recipe-start-inner">
            <img className="recipe-start-image" src={recipe.img} alt="" />
            <div className="recipe-start-label">{recipe.label}</div>
            <div className="recipe-start-info">
              <ThumbUp /> {recipe.difficulty}
              <Schedule /> {recipe.time} minutes
              <RoomService /> {recipe.servings} serving
              {recipe.servings > 1 && "s"}
            </div>
            <div className="recipe-start-button" onClick={handleStart}>
              start
            </div>
          </div>
        </div>
        <div className="recipe-start-ingreds">
          <IngredientCheckList ingredients={recipe.ingredients} />
        </div>
        <div className="recipe-start-methods">
          <MethodOverview methods={recipe.methods} />
        </div>
      </div>
      <RecipeScrollingComponent />
    </>
  );
};

export default RecipeStart;
