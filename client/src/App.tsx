import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/images/logo_transparent.png";
import Home from "./pages/Home/Home";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <RecipeDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
