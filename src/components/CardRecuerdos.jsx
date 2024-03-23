/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Recuerdos({ imagen, frase, title, id,createdAt,updatedAt }) {
  return (
    <Link to={`/recuerdos/update/${id}`} className="text-black hover:-translate-y-0.5 transition-all">
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-zinc-800 text-white border-2 transition-all hover:border-pastel-5 hover:shadow-pastel-1 hover:bg-zinc-900 border-pastel-3 h-full w-full p-2 rounded flex-col gap-4 shadow-lg"
      >
        <div>
          <img
            src={imagen}
            alt="Imagen"
            className="h-full w-full object-cover rounded aspect-square object-center"
            loading="lazy"
          />
        </div>
        <div className="flex gap-x-2 px-2 italic text-zinc-600">
          <span>Creado: {createdAt}</span>
          <span>Actualizado: {updatedAt}</span>
        </div>
        <div className="p-4 font-Poppins text-2xl text-center">
          <p>{title}</p>
        </div>
        <div className="p-4 font-Poppins text-xl">
          <p>{frase}</p>
        </div>
      </motion.article>
    </Link>
  );
}
