import LogoAlt from "./../Imagenes/SRC/2.png";
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer({ phrase, color }) {
  return (
    <footer className={`${color} flex-col p-4 h-64`}>
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
        <h3 className="text-2xl font-Poppins text-center font-semibold">Redes Sociales</h3>
        <div className="h-16 flex justify-center items-center w-1/1">
          <button className="bg-slate-800 text-white text-xl rounded-2xl p-2 mx-3">{<FaFacebook />}</button>
          <button className="bg-slate-800 text-white text-xl rounded-2xl p-2 mx-3">{<FaInstagram />}</button>
          <button className="bg-slate-800 text-white text-xl rounded-2xl p-2 mx-3">{<FaTiktok />}</button>
          <button className="bg-slate-800 text-white text-xl rounded-2xl p-2 mx-3">{<FaGithub />}</button>
        </div>
      </div>
    </footer>
  );
}