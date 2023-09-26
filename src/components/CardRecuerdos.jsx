import React from 'react'

export default function Recuerdos({imagen, frase}) {
  return (
    <article className="bg-pastel-4 h-72 w-full p-8 my-2 grid grid-cols-2 grid-rows-1 rounded">
        <div><img src={imagen} alt="Imagen" className='h-full w-full object-cover bg-red-500' /></div>
        <div className='p-4 font-Poppins text-xl'>
          <p>{frase}</p>
        </div>
    </article>
  )
}
