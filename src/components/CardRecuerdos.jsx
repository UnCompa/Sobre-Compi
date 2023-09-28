import React from 'react'

export default function Recuerdos({imagen, frase}) {
  return (
    <article className="bg-pastel-3 bg-opacity-90 border-2 border-white h-full w-full p-4 rounded flex-col gap-4 shadow-lg" >
        <div><img src={imagen} alt="Imagen" className='h-full md:h-full w-full object-cover bg-red-500 rounded' /></div>
        <div className='p-4 font-Poppins text-xl'>
          <p>{frase}</p>
        </div>
    </article>
  )
}
