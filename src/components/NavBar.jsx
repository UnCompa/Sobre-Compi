/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavBar({ type }) {
  return (
    <nav
      className={`w-1/2 fixed top-24 right-1/2 ${type} bg-slate-50 shadow-2xl text-white z-30`}
    >
      <ul className="p-8 h-full">
        <li className="font-Monte text-black my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-pastel-1 font-bold drop-shadow" : ""
            }
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="font-Monte text-black my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-pastel-2 font-bold" : ""
            }
            to="/informacion"
          >
            Información
          </NavLink>
        </li>
        <li className="font-Monte text-black my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-300 font-bold" : ""
            }
            to="/recuerdos"
          >
            Recuerdos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
