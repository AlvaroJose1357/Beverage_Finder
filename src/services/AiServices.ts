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
      //tambien le puedes pasar varias configuraciones como temperature, top_p, etc. gracias a la librería ai de vercel https://ai-sdk.dev/docs/foundations/prompts#system-prompts
      // system:"prompt: 'Eres un bartender que tiene 50 anos de experiencia y te sirviå una bebida a James Bond ",
      // temperature: 0.7,// controla la creatividad de la respuesta, entre más altos significan más aleatoriedad, mientras que más bajos significan respuestas más predecibles. va desde 0 a 1
    });

    return result.textStream;
  },
};
