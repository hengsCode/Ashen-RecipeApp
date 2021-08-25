import { React } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Home, Profile, Category, Recipes } from "../pages";
import { Header, Footer } from "../components/common";
import RecipeStart from "../components/RecipesPage/RecipeStart";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Recipes" component={Category} />
        <Route exact path="/recipe/:filter" component={Recipes} />
        {/* need to add the recipe here */}
        <Route exact path="/recipe-start" component={RecipeStart} />
        <Footer />
      </Router>
    </Provider>
  );
};

export default Routes;
