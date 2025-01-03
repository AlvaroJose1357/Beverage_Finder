import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
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
    console.log("selectRecipe", id);
  },
});
