// import { Link } from "react-router-dom";
import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  return (
    <header className="bg-slate-800">
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
          <form className="my-32 space-y-6 rounded-xl bg-orange-500 p-10 shadow md:w-1/2 2xl:w-1/3">
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
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-lg font-extrabold text-white"
              >
                Categoria
              </label>
              <select
                id="ingredient"
                name="ingredient"
                className="mt-2 w-full rounded-lg p-3 text-gray-900 focus:outline-none"
              >
                <option value=""> --- Selecciona una categoria ---</option>
                {}
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
