import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
} from "../schemas/recipe-schema";
import { SearchFilter } from "../types";
export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios.get(url);
  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  } else {
    throw new Error("Error fetching categories");
  }
}

export async function getRecipes(searchFilter: SearchFilter) {
  const { ingredient, category } = searchFilter;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
  const { data } = await axios.get(url);
  const result = DrinksAPIResponse.safeParse(data);

  if (result.success) {
    return result.data;
  } else {
    throw new Error("Error fetching categories");
  }
}
