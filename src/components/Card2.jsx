/* eslint-disable no-unused-vars */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ImagenAlt from "./../Imagenes/alt.jpg";
import { motion } from "framer-motion";

export default function Card({ title, text, color, img }) {
  function handleNotas() {
    window.open("/Sobre-Compi/notas");
  }
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className={`${color} flex-cols shadow-lg lg:flex h-full`}>
        <div className="flex justify-center w-full p-4 h-96 lg:h-full">
          <img src={img} alt="Imagen" className="object-cover w-full" />
        </div>
        <div className="text-start flex-col w-full lg:p-8 p-4 px-8">
          <h2 className="text-4xl font-Monte py-4 font-bold">{title}</h2>
          <p className="w-full text-lg font-Poppins">{text}</p>
        </div>
      </div>
    </motion.section>
  );
}
