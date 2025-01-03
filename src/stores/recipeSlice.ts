import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set(() => ({ categories }));
  },
  searchRecipes: async (searchFilter) => {
    const drinks = await getRecipes(searchFilter);
    // console.log(drinks);
    set(() => ({ drinks }));
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    // console.log(selectedRecipe);
    set(() => ({ selectedRecipe }));
  },
});
