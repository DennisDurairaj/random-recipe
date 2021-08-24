import { Request, Response, NextFunction, response } from "express";
import axios, { AxiosResponse } from "axios";
import sampleResponse from "../sampleResponse.json";

interface GetRecipeRequest {
  id: string;
}

export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  analyzedInstructions: Instruction[];
  extendedIngredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  original: string;
}

export interface Instruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
}

const getRecipeList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result: AxiosResponse<{ recipes: Recipe[] }> = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=10`
    );
    return res.status(200).json(result.data.recipes);
  } catch (e) {
    res.status(e.response.status).json({
      message: e.response.data.message,
    });
  }
};

const getRecipe = async (
  req: Request<GetRecipeRequest, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result: AxiosResponse<Recipe> = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`
    );

    if (result === undefined) {
      return res.status(404).json(`Recipe with id ${id} does not exist.`);
    }

    return res.status(200).json(result.data);
  } catch (e) {
    res.status(e.response.status).json({
      message: e.response.data.message,
    });
  }
};

export default { getRecipeList, getRecipe };
