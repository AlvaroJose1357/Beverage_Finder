import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";

// los ...a son los argumentos que tiene create (set,get,api) que se le pasan a los diferentes slice que vamos a crear
export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
  })),
);
