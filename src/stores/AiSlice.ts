import { StateCreator } from "zustand";

export type AiSliceType = {
  recipe: string;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAiSlice: StateCreator<
  AiSliceType,
  [],
  [],
  AiSliceType
> = () => ({
  recipe: "",
  generateRecipe: async (prompt) => {
    // Lógica para generar la receta utilizando el prompt
    console.log("Generando receta con prompt:", prompt);
  },
});
