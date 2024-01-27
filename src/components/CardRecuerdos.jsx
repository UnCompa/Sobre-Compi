/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function Recuerdos({ imagen, frase }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-zinc-800 bg-opacity-50 border-2 border-pastel-3 h-full w-full p-4 rounded flex-col gap-4 shadow-lg"
    >
      <div>
        <img
          src={imagen}
          alt="Imagen"
          className="h-full w-full object-cover rounded"
          loading="lazy"
        />
      </div>
      <div className="bg-zinc-900 px-2 py-4 font-Poppins text-xl text-white font-bold">
        <p>{frase}</p>
      </div>
    </motion.article>
  );
}
