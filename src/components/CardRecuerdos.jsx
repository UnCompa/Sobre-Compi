/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function Recuerdos({ imagen, frase, title, id }) {
  const handleClick = () =>{
    const api = `https://compis.onrender.com/api/images/${id}`
    fetch(api,{
      method: "DELETE"
    }).then((res)=> res.json())
    .then((data)=>{
      console.log(data)
      window.location.reload()
    })
  }
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 
      className="bg-zinc-800 bg-opacity-50 border-2 border-pastel-3 h-full w-full p-4 rounded flex-col gap-4 shadow-lg 
    >
      <div>
        <img
          src={imagen}
          alt="Imagen"
          className="h-full w-full object-cover rounded"
          loading="lazy"
        />
      </div>
      <div className="text-center text-2xl font-Poppins font-bold text-black">
        <h3>{title}</h3>
      </div>
      <div className="px-2 font-Poppins text-base">
        <p>{frase}</p>
      </div>
      <div>
        <button onClick={handleClick} className="bg-red-500 px-4 py-1 mx-2 my-2 rounded-md text-white font-bold">Borrar</button>
      </div>
    </motion.article>
  );
}
