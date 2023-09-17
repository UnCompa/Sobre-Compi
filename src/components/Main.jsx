import { FaHeart } from "react-icons/fa6";
import Imagen from "./../Imagenes/a3.jpg";
import ImagenAlt from "./../Imagenes/alt.jpg";
export default function Main() {
  return (
    <>
    <main className="container mx-auto h-full">
      <section className="md:h-64 md:flex md:items-center my-2">
        <div className="my-8 w-full bg-pastel-4 h-full">
          <h2 className="text-xl p-3 font-Monte font-bold">
            ¿Para quién?
          </h2>
          <p className="p-3 font-Poppins text-start">
            La página esta dedicada a mi <b>Mi compi ♫</b> donde estaran cosas sobre ella, ademas de notas que ire dejando donde estaran los cambios de la pagina, y cosas que hemos hecho .
          </p>
          <p className="p-3 font-Poppins text-start">
            Ademas de proximas cosas que estare haciendo, sin mas disfruta de la pagina :D
          </p>
        </div>
        {/* foto */}
        <div className="my-2 p-0 w-full h-full bg-white md:h-full md:w-72 md:bg-pastel-4">
          <div className="h-full w-full flex justify-center p-1">
            <img
              src={ImagenAlt}
              alt="Tu"
              className="object-cover object-center h-96 md:h-full w-full"
            />
          </div>
        </div>
      </section>
      <section className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-pastel-4 p-4 my-2">
          <h3 className="text-xl font-Monte font-bold">Objectivo:</h3>
          <p className="font-Poppins py-2">Crear una pagina sobre mi amiga, aqui estara Informacion de ella entre otras cosas. <br /><b className="text-red-900">Importante: </b>la pagina escalara hasta que ocurra esto:</p>
          <ul className="list-disc px-8 py-2 font-Poppins font-bold">
            <li>Llegue su cumpleaños</li>
            <li>Un evento de despedida</li>
            <li>Desconexión</li>
          </ul>
        </div>
        <div className="bg-pastel-4 p-4 my-2">
          <h3 className="text-xl font-Monte font-bold">Contenido:</h3>
          <p className="text-md font-Poppins py-2">Lo destacado:</p>
          <ul className="list-disc px-8 py-2 font-Poppins font-bold">
            <li>Informacion sobre La Compi</li>
            <li>Notas de version y de estados</li>
            <li>Recuerdos importantes y destacados de La Compi</li>
            <li>Informacion acerca de mi y que hago</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  );
}
