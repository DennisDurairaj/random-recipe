import React from "react";
import RecipeList from "../features/recipes/RecipeList";

interface Props {}

const Home = (props: Props) => {
  return (
    <div>
      <RecipeList />
    </div>
  );
};

export default Home;
