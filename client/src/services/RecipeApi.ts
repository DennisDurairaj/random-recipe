import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import API_URL from "../config";
import { Recipe } from "../features/recipes/types";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Recipes"],
  endpoints: (build) => ({
    getRecipeList: build.query<Recipe[], void>({
      query: () => "recipes",
    }),
    getRecipeById: build.query<Recipe, number>({
      query: (id) => `recipes/${id}`,
    }),
  }),
});

export const { useGetRecipeListQuery, useGetRecipeByIdQuery } = recipeApi;
