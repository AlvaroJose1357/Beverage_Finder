import { StateCreator } from "zustand";
import AiServices from "../services/AiServices";

export type AiSliceType = {
  recipe: string;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAiSlice: StateCreator<AiSliceType, [], [], AiSliceType> = (
  set,
) => ({
  recipe: "",
  generateRecipe: async (prompt) => {
    // Lógica para generar la receta utilizando el prompt
    const data = await AiServices.generateRecipe(prompt);
    // Aquí se maneja el flujo de datos generados por la IA.
    for await (const textPart of data) {
      // Aquí se maneja el texto generado, por ejemplo, concatenarlo a un estado o mostrarlo en la UI.
      set((state) => ({
        // Concatenar el texto generado a la receta actual
        recipe: state.recipe + textPart,
      }));
    }
  },
});
