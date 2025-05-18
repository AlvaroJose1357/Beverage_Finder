import { useAppStore } from "../stores/useAppStore";

export default function GenerateAI() {
  const showNotification = useAppStore((state) => state.showNotification);
  const generateRecipe = useAppStore((state) => state.generateRecipe);
  const recipe = useAppStore((state) => state.recipe);

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
              className={`absolute right-5 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer`}
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

        <div className="whitespace-pre-wrap py-10">{recipe}</div>
      </div>
    </>
  );
}
