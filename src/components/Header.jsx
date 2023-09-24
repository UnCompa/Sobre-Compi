import { useState } from "react";
import NavBar from "./NavBar";
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import { FaX } from "react-icons/fa6";
import Logo from "./../Imagenes/SRC/8.png";

function Header({ title, color }) {
  const [nav, setNav] = useState(true);
  const [icon, setIcon] = useState(true);
  function handleClick() {
    setNav(!nav);
    setIcon(!icon);
  }
  function handleReturn() {
    window.open("/Sobre-Compi/", "_self");
  }
  return (
    <header
      className={`h-24 ${color} w-full flex items-center justify-between row-start-1 row-span-1 sticky top-0 shadow-lg`}
    >
      <NavBar type={nav ? "h-0 hidden" : "h-screen"} />
      <button
        onClick={handleClick}
        className="text-black text-4xl transition duration-150 ease-in-out px-6"
      >
        {" "}
        {icon ? <HiBars3BottomLeft /> : <HiXMark />}
      </button>
      <h1 className="text-2xl uppercase text-center font-Monte">{title}</h1>
      <img
        src={Logo}
        alt="Logo"
        className="h-20 object-cover w-16 cursor-pointer mr-6 drop-shadow-xl"
        onClick={handleReturn}
      />
    </header>
  );
}

export default Header;
