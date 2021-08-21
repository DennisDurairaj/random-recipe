import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recipe } from "./types";

export const recipeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getRecipeList: build.query<Recipe[], void>({
      query: () => "recipes",
    }),
  }),
});
export const { useGetRecipeListQuery } = recipeApi;
