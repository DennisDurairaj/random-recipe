import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

const getRecipeList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({});
};

export default { getRecipeList };
