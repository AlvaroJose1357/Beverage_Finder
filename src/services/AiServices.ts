import openRouter from "../lib/ai";
import { streamText } from "ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openRouter("meta-llama/llama-3.3-8b-instruct:free"),
      prompt,
      // messages: [
      //   {
      //     role: "user",
      //     content: prompt,
      //   },
      // ],
    });

    return result.textStream;
  },
};
