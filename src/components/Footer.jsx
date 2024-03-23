/* eslint-disable react/prop-types */
import LogoAlt from "./../Imagenes/SRC/2.png";
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer({ phrase, color }) {
  function Facebook() {
    open("https://www.facebook.com/UnCompa1777");
  }
  function Instagram() {
    open("https://www.instagram.com/UnCompa1777");;
  }
  function TikTok() {
    open("https://tiktok.com");
  }
  function GitHub() {
    open("https://github.com/UnCompa");
  }
  return (
    <footer className={`${color} flex-col p-4 h-64 -z-10`}>
      <div
        className="flex justify-center items-center 
      flex-col"
      >
        <img
          src={LogoAlt}
          alt="LogoAlt"
          className="h-16 object-cover w-44 md:w-52"
        />
        <p className="font-Monte font-light px-8 text-center underline decoration-white decoration-2">
          {phrase}
        </p>
      </div>
      <div className="p-4 flex-col md:flex items-center">
        <h3 className="text-2xl font-Monte text-center font-semibold">
          Redes Sociales
        </h3>
        <div className="h-16 flex justify-center items-center w-1/1">
          <button
            onClick={Facebook}
            className="text-white bg-black text-2xl rounded-full p-2 mx-3 hover:ring hover:ring-white transition drop-shadow"
          >
            {<FaFacebook />}
          </button>
          <button
            onClick={Instagram}
            className="text-white bg-black text-2xl rounded-full p-2 mx-3 hover:ring hover:ring-white transition drop-shadow"
          >
            {<FaInstagram />}
          </button>
          <button
            onClick={TikTok}
            className="text-white bg-black text-2xl rounded-full p-2 mx-3 hover:ring hover:ring-white transition drop-shadow"
          >
            {<FaTiktok />}
          </button>
          <button
            onClick={GitHub}
            className="text-white bg-black text-2xl rounded-full p-2 mx-3 hover:ring hover:ring-white transition drop-shadow"
          >
            {<FaGithub />}
          </button>
        </div>
      </div>
    </footer>
  );
}
