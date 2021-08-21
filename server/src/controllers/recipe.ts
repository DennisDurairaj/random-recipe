import { Request, Response, NextFunction, response } from "express";
import axios, { AxiosResponse } from "axios";
import sampleResponse from "../sampleResponse.json";

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

export default { getRecipeList };
