import { React } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Home, Profile } from "../pages";
import { Header, Footer } from "../components/common";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/recipes" component ={Recipe} */}
        <Footer />
      </Router>
    </Provider>
  );
};

export default Routes;
