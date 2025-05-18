import { StateCreator } from "zustand";
import AiServices from "../services/AiServices";

export type AiSliceType = {
  recipe: string;
  isGenerative: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAiSlice: StateCreator<AiSliceType> = (set) => ({
  recipe: "",
  isGenerative: false, // Indica si la IA está generando una receta
  generateRecipe: async (prompt) => {
    // cada que se llame a esta función, se reinicia la receta
    set({ recipe: "", isGenerative: true });
    // Lógica para generar la receta utilizando el prompt
    const data = await AiServices.generateRecipe(prompt);
    // Aquí se maneja el flujo de datos generados por la IA.
    for await (const textPart of data) {
      // Aquí se maneja el texto generado, por ejemplo, concatenarlo a un estado o mostrarlo en la UI.
      set((state) => ({
        // Concatenar el texto generado a la receta actual
        recipe: state.recipe + textPart,
      }));
      set({ isGenerative: false }); // Una vez que se completa la generación, se establece isGenerative a false
    }
  },
});
