import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoritesSliceType } from "./favoritesSlice";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

// los dobles corchetes son para que el array sea de tipo RecipeSliceType y FavoritesSliceType y este no espera parametros adicionales por lo que se deja vacio
export const createRecipeSlice: StateCreator<
  RecipeSliceType & FavoritesSliceType,
  [],
  [],
  RecipeSliceType
> = (set) => ({
  categories: { drinks: [] },
  drinks: { drinks: [] },
  selectedRecipe: {} as Recipe,
  modal: false,
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
    set(() => ({ selectedRecipe, modal: true }));
  },
  closeModal: () => {
    set(() => ({ modal: false, selectedRecipe: {} as Recipe }));
  },
});
