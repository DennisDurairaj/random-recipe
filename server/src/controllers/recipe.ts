import { Request, Response, NextFunction, response } from "express";
import axios, { AxiosResponse } from "axios";
import sampleResponse from "../sampleResponse.json";

interface GetRecipeRequest {
  id: string;
}

const getRecipeList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const result: AxiosResponse = await axios.get(
    //   `https://api.spoonacular.com/recipes/random?number=10`
    // );
    return res.status(200).json(sampleResponse.recipes);
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
    // const result: AxiosResponse = await axios.get(
    //   `https://api.spoonacular.com/recipes/random?number=10`
    // );

    const result = sampleResponse.recipes.find(
      (item) => item.id === parseInt(id)
    );

    if (result === undefined) {
      return res.status(404).json(`Recipe with id ${id} does not exist.`);
    }

    return res.status(200).json(result);
  } catch (e) {
    res.status(e.response.status).json({
      message: e.response.data.message,
    });
  }
};

export default { getRecipeList, getRecipe };
