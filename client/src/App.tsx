import React from "react";
import "./App.css";
import RecipeList from "./features/recipes/RecipeList";
import logo from "./assets/images/logo_transparent.png";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </nav>
      {/* <RecipeList /> */}
    </div>
  );
}

export default App;
