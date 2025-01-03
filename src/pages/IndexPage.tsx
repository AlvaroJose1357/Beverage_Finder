import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrink = useMemo(() => drinks.drinks.length > 0, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrink ? (
        <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {drinks.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="my-10 text-center text-2xl">
            No hay resultados aun, utiliza el formulario para buscar recetas
          </p>
        </>
      )}
    </>
  );
}
