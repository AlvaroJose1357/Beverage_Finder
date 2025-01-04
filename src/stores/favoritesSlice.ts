import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
  favorites: Recipe[];
  hangleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get,
) => ({
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
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
});
