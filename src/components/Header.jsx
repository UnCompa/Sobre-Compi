import { useState } from "react";
import NavBar from "./NavBar";
import { FaBars, FaX } from "react-icons/fa6";
import Logo from './../Imagenes/SRC/8.png'

function Header({title,color}) {
  const [nav, setNav] = useState(true);
  const [icon, setIcon] = useState(true)
  function handleClick() {
    setNav(!nav);
    setIcon(!icon)
  }
  function handleReturn() {
    window.open("/Sobre-Compi/","_self")
  }
  return (
    <header className={`h-24 ${color} w-full flex items-center justify-around row-start-1 row-span-1 sticky top-0 shadow-lg`}>
      <img src={Logo} alt="Logo" className="h-20 object-cover w-16 cursor-pointer" onClick={handleReturn}/>
      <h1 className="text-xl uppercase font-Monte">{title}</h1>
      <button onClick={handleClick} className="text-black text-3xl transition duration-150 ease-in-out">        {icon ? <FaBars/> : <FaX/>}
      </button>
      <NavBar type={nav ? "h-0 hidden" : "h-screen"} />
    </header>
  );
}

export default Header;
