import { useAppStore } from "../stores/useAppStore";

export default function GenerateAI() {
  const showNotification = useAppStore((state) => state.showNotification);
  const generateRecipe = useAppStore((state) => state.generateRecipe);
  const recipe = useAppStore((state) => state.recipe);
  const isGenerative = useAppStore((state) => state.isGenerative);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario

    const form = new FormData(event.currentTarget); // Obtener los datos del formulario
    const prompt = form.get("prompt") as string; // Obtener el valor del campo 'prompt'

    if (prompt.trim() === "") {
      // Validación simple para asegurarse de que el prompt no esté vacío
      showNotification({
        text: "El campo de prompt no puede estar vacío",
        error: true,
      });
      return;
    }

    // Llamar a la función para generar la receta
    await generateRecipe(prompt);
  };
  return (
    <>
      <h1 className="text-6xl font-extrabold">Generar Receta con IA</h1>

      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 py-10">
          <div className="relative">
            <input
              name="prompt"
              id="prompt"
              className="w-full rounded-lg border border-slate-800 bg-white p-4"
              placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className={`absolute right-5 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer ${isGenerative ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={isGenerative}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
        {isGenerative ? (
          <div className="flex flex-col items-center justify-center py-10">
            <svg
              className="h-20 w-20 animate-spin text-slate-800"
              width="79"
              height="79"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="currentColor"
              />
              <path
                d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                fill="currentColor"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500">Generando receta...</p>
          </div>
        ) : (
          recipe && <div className="whitespace-pre-wrap">{recipe}</div>
        )}
      </div>
    </>
  );
}
