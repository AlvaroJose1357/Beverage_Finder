// import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const [searchFilter, setSSearchFilter] = useState({
    ingredient: "",
    category: "",
  });

  const categories = useAppStore((state) => state.categories);
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSSearchFilter({
      ...searchFilter,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validacion de formulario
    if (Object.values(searchFilter).includes("")) {
      showNotification({
        text: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    // consultar receta
    searchRecipes(searchFilter);
    // const form = new FormData(event.currentTarget);
    // setSSearchFilter({
    //   ingredient: form.get("ingredient") as string,
    //   category: form.get("category") as string,
    // });
  };
  return (
    <header
      className={isHome ? "bg-header bg-cover bg-center" : "bg-slate-800"}
    >
      <div className="container mx-auto px-5 py-16">
        <div className="flex items-center justify-between">
          <div>
            {/* logo */}
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav>
            {/* navegacion entre paginas */}
            <ul className="flex space-x-5">
              {/* usando Link */}
              {/* <li>
                <Link
                  to="/"
                  className="font-bold uppercase text-white transition-colors hover:text-gray-300"
                >
                  Inicio
                </Link>
                {/* <a
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Inicio
                </a> 
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="font-bold uppercase text-white transition-colors hover:text-gray-300"
                >
                  Favoritos
                </Link>
              </li> */}
              {/* usando NavLink  */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold uppercase text-orange-500 transition-colors hover:text-gray-300"
                      : "font-bold uppercase text-white transition-colors hover:text-gray-300"
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold uppercase text-orange-500 transition-colors hover:text-gray-300"
                      : "font-bold uppercase text-white transition-colors hover:text-gray-300"
                  }
                >
                  Favoritos
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {isHome && (
          <form
            className="my-32 space-y-6 rounded-xl bg-orange-500 p-10 shadow md:w-1/2 2xl:w-1/3"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-lg font-extrabold text-white"
              >
                Nombre o Ingrediente
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Ron, etc."
                className="mt-2 w-full rounded-lg p-3 text-gray-900 focus:outline-none"
                onChange={handleChange}
                value={searchFilter.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-lg font-extrabold text-white"
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                className="mt-2 w-full rounded-lg p-3 text-gray-900 focus:outline-none"
                onChange={handleChange}
                value={searchFilter.category}
              >
                <option value=""> --- Selecciona una categoria ---</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-orange-400 p-3 font-extrabold uppercase text-white hover:bg-orange-600"
            >
              Buscar
            </button>
          </form>
        )}
      </div>
    </header>
  );
}
