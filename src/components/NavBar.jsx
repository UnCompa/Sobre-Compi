/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import ModalButton from "./ModalButton";

export default function NavBar({ type }) {
  return (
    <nav
      className={`h-screen w-1/2 fixed top-16 right-1/2 ${type} bg-zinc-800 shadow-2xl text-white z-30 transition-all duration-300 ease-in-out`}
    >
      <ul className="p-8 h-full">
        <li className="font-Monte text-white my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-pastel-1 font-bold drop-shadow" : ""
            }
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="font-Monte text-white my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-pastel-2 font-bold" : ""
            }
            to="/informacion"
          >
            Información
          </NavLink>
        </li>
        <li className="font-Monte text-white my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-purple-300 font-bold" : ""
            }
            to="/recuerdos"
          >
            Recuerdos
          </NavLink>
        </li>
        <li className="font-Monte text-white my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-pink-300 font-bold" : ""
            }
            to="/notas"
          >
            Notas
          </NavLink>
        </li>
        <li className="font-Monte text-white my-6 py-2 text-xl border-b-4 border-pastel">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-300 font-bold" : ""
            }
            to="/multimedia"
          >
            Multimedia
          </NavLink>
        </li>
        <li>
          <ModalButton/>
        </li>
      </ul>
    </nav>
  );
}
