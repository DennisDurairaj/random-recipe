import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { recipeApi } from "./services/RecipeApi";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (gDM) => gDM().concat(recipeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
