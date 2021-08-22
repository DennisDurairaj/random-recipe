import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recipe } from "../features/recipes/types";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
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
