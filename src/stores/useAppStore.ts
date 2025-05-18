import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";
import { AiSliceType, createAiSlice } from "./AiSlice";

// los ...a son los argumentos que tiene create (set,get,api) que se le pasan a los diferentes slice que vamos a crear
export const useAppStore = create<
  RecipeSliceType & FavoritesSliceType & NotificationSliceType & AiSliceType
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAiSlice(...a),
  })),
);
