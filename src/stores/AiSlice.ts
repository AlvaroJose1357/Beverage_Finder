import { StateCreator } from "zustand";

export type AiSliceType = {
  recipe: string;
};

export const createAiSlice: StateCreator<
  AiSliceType,
  [],
  [],
  AiSliceType
> = () => ({
  recipe: "",
});
