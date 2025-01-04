import { StateCreator } from "zustand";
import { Recipe } from "../types";
// importando otros elementos desde otro slice mas conocido como nested slices
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  hangleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

// esta es la forma de obtener los datos desde otro slice, pero esta forma debido a su forma en la cual se esta accediendo a los datos no es la mas optima ni la mas recomendada
export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipeSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  hangleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      console.log("ya existe en favoritos");
      // se filtran los favoritos para que no se repita la receta y si este ya existe en favoritos se elimina
      // set({
      //   favorites: get().favorites.filter(
      //     (favorite) => favorite.idDrink !== recipe.idDrink,
      //   ),
      // });
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink,
        ),
      }));
    } else {
      console.log("no existe en favoritos");
      // este se puede hacer de 2 formas y de cualquiera de las 2 formas se puede acceder a los favoritos
      //set({ favorites: [...get().favorites, recipe] });
      set((state) => ({ favorites: [...state.favorites, recipe] }));
    }
    createRecipeSlice(set, get, api).closeModal();
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFromStorage: () => {
    const storeFavorites = localStorage.getItem("favorites");
    if (storeFavorites) {
      set({ favorites: JSON.parse(storeFavorites) });
    }
  },
});
