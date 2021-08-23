import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import RecipeList from "../../features/recipes/RecipeList";
import { useGetRecipeListQuery } from "../../services/RecipeApi";
import styles from "./Home.module.css";

interface Props {}

const Home = (props: Props) => {
  const { data, isError, isLoading } = useGetRecipeListQuery();

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {isLoading === false && data && <RecipeList data={data} />}
    </div>
  );
};

export default Home;
