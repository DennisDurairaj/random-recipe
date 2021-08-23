import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
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
