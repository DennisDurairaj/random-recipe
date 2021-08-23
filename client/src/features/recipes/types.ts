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
