/* eslint-disable react/prop-types */
import { useState } from "react";
import NavBar from "./NavBar";
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import Logo from "./../Imagenes/SRC/9.png";
import { useSound } from "use-sound";
import Sound from "./../sound/Tap.mp3";
import OpenSound from "./../sound/Open.mp3";

function Header({ title, color }) {
  const [playSound] = useSound(Sound);
  const [playOpenSound] = useSound(OpenSound);
  const [nav, setNav] = useState(true);
  const [icon, setIcon] = useState(true);
  function handleClick() {
    setNav(!nav);
    setIcon(!icon);
  }
  function handleReturn() {
    window.open("/", "_self");
  }
  return (
    <header
      className={`sticky h-16 text-white bg-zinc-800 border-b-4 ${color} w-full flex items-center justify-between row-start-1 row-span-1 top-0 shadow-xl shadow-white/20 z-50`}
    >
      <NavBar type={!nav ? "translate-x-0" : "-translate-x-[100%]"} />
      <button
        onClick={handleClick}
        onMouseEnter={playOpenSound}
        className="text-white text-4xl transition duration-150 ease-in-out px-6"
      >
        {" "}
        {icon ? <HiBars3BottomLeft /> : <HiXMark />}
      </button>
      <h1 className="text-2xl uppercase font-Monte">{title}</h1>
      <img
        src={Logo}
        alt="Logo"
        className="h-12 object-cover w-14 cursor-pointer mr-6 drop-shadow-xl"
        onClick={handleReturn}
        onMouseEnter={playSound}
      />
    </header>
  );
}

export default Header;
