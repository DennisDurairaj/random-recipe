import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header/Header";
import { Page404 } from "./components/Page404";
import Home from "./pages/Home/Home";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:id">
              <RecipeDetails />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
