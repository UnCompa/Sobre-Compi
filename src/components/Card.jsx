/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa6";

export default function Card({title,text,color,img,evento,sound,code}) {
  return (
        <section>
        <div className={`${color} flex-cols shadow-md lg:flex text-black`}>
          <div className="flex justify-center h-96 w-full p-4"><img src={img} alt="Imagen" className="object-cover"/></div>
            <div className="text-start flex-col w-full lg:p-8 p-4 px-8 items-center">               
             <h2 className="text-4xl font-Monte py-4">{title}{code}</h2>
                <p className="w-full text-lg font-Poppins">{text}</p>
            <button onClick={evento} onTouchStart={sound} className="bg-slate-50 px-8 py-2 rounded-lg mt-12 text-xl shadow hover:bg-slate-800 hover:text-white transition-all">{<FaArrowRight/>}</button>
            </div>
        </div>
      </section>
  )
}
