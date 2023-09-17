import { useState } from "react";
import NavBar from "./NavBar";
import { FaBars, FaX } from "react-icons/fa6";
import Logo from './../Imagenes/SRC/8.png'

function Header({title}) {
  const [nav, setNav] = useState(true);
  const [icon, setIcon] = useState(true)
  function handleClick() {
    setNav(!nav);
    setIcon(!icon)
  }
  function handleReturn() {
    window.open("/Sobre-Compi/")
  }
  return (
    <header className="h-24 bg-pastel-2 w-full flex items-center justify-around relative row-start-1 row-span-1">
      <img src={Logo} alt="Logo" className="h-20 object-cover w-16" onClick={handleReturn()}/>
      <h1 className="text-xl uppercase font-Monte">{title}</h1>
      <button onClick={handleClick} className="text-black text-3xl transition duration-150 ease-in-out">        {icon ? <FaBars/> : <FaX/>}
      </button>
      <NavBar type={nav ? "hidden" : ""} />
    </header>
  );
}

export default Header;
