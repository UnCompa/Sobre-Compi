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
          className="h-16 object-cover w-40 md:1/2"
        />
        <p className="font-Monte font-semibold italic px-8 text-center">
          "{phrase}"
        </p>
      </div>
      <div className="p-4 flex-col md:flex items-center">
        <h3 className="text-2xl font-Poppins text-center font-semibold">
          Redes Sociales
        </h3>
        <div className="h-16 flex justify-center items-center w-1/1">
          <button
            onClick={Facebook}
            className="text-black text-3xl rounded-full p-3 mx-3 hover:text-white transition drop-shadow"
          >
            {<FaFacebook />}
          </button>
          <button
            onClick={Instagram}
            className="text-black text-3xl rounded-full p-3 mx-3 hover:text-white transition drop-shadow"
          >
            {<FaInstagram />}
          </button>
          <button
            onClick={TikTok}
            className="text-black text-3xl rounded-full p-3 mx-3 hover:text-white transition drop-shadow"
          >
            {<FaTiktok />}
          </button>
          <button
            onClick={GitHub}
            className="text-black text-3xl rounded-full p-3 mx-3 hover:text-white transition drop-shadow"
          >
            {<FaGithub />}
          </button>
        </div>
      </div>
    </footer>
  );
}
