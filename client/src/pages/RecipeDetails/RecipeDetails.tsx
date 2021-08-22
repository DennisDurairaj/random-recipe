import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";
import { Recipe } from "../../features/recipes/types";
import { recipeApi } from "../../services/RecipeApi";
import styles from "./RecipeDetails.module.css";

interface Props {}

type RecipeDetailsParams = {
  id: string;
};

function transformInstructions(text: any) {
  console.log(text);
  const indexOfNewLine = text.indexOf("\n");
  return <pre>{text}</pre>;
}

const RecipeDetails = (props: Props) => {
  const { id } = useParams<RecipeDetailsParams>();
  const recipeState = recipeApi.endpoints.getRecipeList.useQueryState();
  const [trigger, result] = recipeApi.useLazyGetRecipeByIdQuery();
  const [recipe, setRecipe] = useState<Recipe>();
  console.log(recipe);

  useEffect(() => {
    if (
      recipeState.data === undefined ||
      recipeState.data.find((item) => (item.id === parseInt(id)) === undefined)
    ) {
      trigger(parseInt(id));
    } else {
      setRecipe(recipeState.data.find((item) => item.id === parseInt(id)));
    }
  }, [id]);

  useEffect(() => {
    if (result.data) {
      setRecipe(result.data);
    }
  }, [result.data]);

  return (
    <>
      {recipe && (
        <div className={styles.container}>
          <h1>{recipe.title}</h1>
          <img className={styles.image} src={recipe.image} alt={recipe.title} />
          <div>{recipe.readyInMinutes} minutes</div>
          <div>{recipe.servings} servings</div>
          <h2>Summary</h2>
          <div className={styles.summary}>
            {ReactHtmlParser(recipe.summary)}
          </div>
          <h2>Instructions</h2>
          <div className={styles.instructions}>
            {transformInstructions(recipe.instructions)}
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
