export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  analyzedInstructions: Instructions[];
  extendedIngredients: Ingredients[];
}

export interface Ingredients {
  id: number;
  name: string;
  original: string;
}

export interface Instructions {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
}
