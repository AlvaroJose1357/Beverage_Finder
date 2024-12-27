// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header() {
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
      </div>
    </header>
  );
}
