import api from "../lib/axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../schemas/recipe-schema";

import { Drink, SearchFilter } from "../types";
export async function getCategories() {
  const url = "/list.php?c=list";
  const { data } = await api.get(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  } else {
    throw new Error("Error fetching categories");
  }
}

export async function getRecipes(searchFilter: SearchFilter) {
  const { ingredient, category } = searchFilter;
  const url = `/filter.php?i=${ingredient}&c=${category}`;
  const { data } = await api.get(url);
  const result = DrinksAPIResponse.safeParse(data);

  if (result.success) {
    return result.data;
  } else {
    throw new Error("Error fetching categories");
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `/lookup.php?i=${id}`;
  const { data } = await api.get(url);
  // console.log(data);
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  // console.log(result);

  if (result.success) {
    return result.data;
  } else {
    throw new Error("Error fetching categories");
  }
}
