/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function Recuerdos({ imagen, frase }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-zinc-500 bg-opacity-50 border-2 border-pastel-3 h-full w-full p-2 rounded flex-col gap-4 shadow-lg"
    >
      <div>
        <img
          src={imagen}
          alt="Imagen"
          className="h-full w-full object-cover bg-red-500 rounded"
        />
      </div>
      <div className="p-4 font-Poppins text-xl">
        <p>{frase}</p>
      </div>
    </motion.article>
  );
}
