import type { Drink } from "../types";

type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <div className="border shadow-xl">
      <div className="overflow-hidden">
        <img
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
          className="transition-transform hover:rotate-2 hover:scale-110"
        />
      </div>
      <div className="p-5">
        {/* truncate es por si el texto es muy largo y no se vea bien en la pantalla  */}
        <h2 className="truncate text-2xl font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="mt-5 w-full bg-orange-400 p-3 text-lg font-bold text-white hover:bg-orange-600"
        >
          Ver Receta
        </button>
      </div>
    </div>
  );
}
