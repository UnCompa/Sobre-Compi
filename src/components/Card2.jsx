/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Card({ title, text, color, img }) {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}>
      <div className={`border-2 flex-cols shadow-lg lg:flex h-full ${color}`}>
        <div className="flex justify-center w-full p-4 h-96 lg:h-full">
          <img src={img} alt={`Imagen ${title}`} className="object-cover w-full" />
        </div>
        <div className="text-start flex-col w-full lg:p-8 p-4 px-8">
          <h2 className="text-4xl font-Monte py-4 font-bold">{title}</h2>
          <p className="w-full text-lg font-Poppins">{text}</p>
        </div>
      </div>
    </motion.section>
  );
}
