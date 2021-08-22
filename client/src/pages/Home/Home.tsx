import React from "react";
import RecipeList from "../../features/recipes/RecipeList";
import { useGetRecipeListQuery } from "../../services/RecipeApi";

interface Props {}

const Home = (props: Props) => {
  const { data, isError, isLoading } = useGetRecipeListQuery();

  return <div>{isLoading === false && data && <RecipeList data={data} />}</div>;
};

export default Home;
