import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { Recipe } from "../../features/recipes/types";
import { recipeApi } from "../../services/RecipeApi";
import styles from "./RecipeDetails.module.css";

interface Props {}

type RecipeDetailsParams = {
  id: string;
};

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

  if (result.isError) {
    let error = result.error as any;
    if (error.status === 404) {
      return <div>{error.data}</div>;
    }
    throw error;
  }

  return (
    <>
      {(recipeState.isLoading || result.isLoading) && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {recipe && (
        <div className={styles.container}>
          <h1 data-cy="title">{recipe.title}</h1>
          <div className={styles.header}>
            <img src={recipe.image} alt={recipe.title} />
            <div>Ready in {recipe.readyInMinutes} minutes</div>
            <div>{recipe.servings} servings</div>
            <h2 data-cy="summary">Summary</h2>
            <div className={styles.summary}>
              {ReactHtmlParser(recipe.summary)}
            </div>
          </div>

          <h2 data-cy="ingredients">Ingredients</h2>
          <ul className={styles.ingredients}>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h2 data-cy="instructions">Instructions</h2>
          <ul className={styles.instructions}>
            {recipe.analyzedInstructions.map((instructions) => {
              return instructions.steps.map(({ step }, index) => (
                <li key={index}>
                  {index + 1}. {step}
                </li>
              ));
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
