import Imagen from './../Imagenes/recuerdosnew/21.jpg'
import Card from "./Card";
import Card1 from "./../Imagenes/info.jpg";
import Card3 from "./../Imagenes/recuerdos.jpg";
import { useNavigate } from "react-router-dom";
import { useSound } from "use-sound";
import Tap from "./../sound/Whistle.mp3";
import Music from "./Music";
import Musica from "./../sound/Music.mp3";
export default function Main() {
  let navigate = useNavigate();
  const [playsound] = useSound(Tap);
  function handleInfo() {
    navigate("/informacion");
  }
  function handleRecuerdos() {
    navigate("/recuerdos");
  }
  return (
    <>
      <main className="container mx-auto h-full">
        <Music src={Musica} />
        <section className="md:h-64 md:flex md:items-center my-2">
          <div className="my-8 w-full border-2 border-pastel-4 h-full text-white rounded">
            <h2 className="text-xl p-3 font-Monte font-bold">¿Para quién es?</h2>
            <p className="p-3 font-Poppins text-start">
              La página esta dedicada a mi <b>Mi compi ♫</b> donde estaran cosas
              sobre ella, ademas de notas que ire dejando donde estaran los
              cambios de la pagina, y cosas que hemos hecho.
            </p>
            <p className="p-3 font-Poppins text-start">
              Una pagina hecha como práctica, además de servir como tributo a Sam
              Att: UnCompa
            </p>
          </div>
          <div className="px-2 w-full h-full md:h-full md:w-72">
            <div className="h-full w-full flex justify-center">
              <img
                src={Imagen}
                alt="Tu"
                className="object-cover object-center h-96 md:h-full w-full border-2 border-pastel-3"
              />
            </div>
          </div>
        </section>
        <section className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-pastel-4 border-2 text-white rounded p-4 my-2">
            <h3 className="text-xl font-Monte font-bold">Objectivos:</h3>
            <p className="font-Poppins py-2">
               Crear una página para la chica Sam, aqui estara Información de ella entre otras cosas. <br />
            </p>
            <ul className="list-disc px-8 py-2 font-Poppins font-bold">
             <li>- Que sirva de ejemplo de mi trabajo</li>
             <li>- Una biografía sobre Sam</li>
             <li>- Un regalo para ella</li>
            </ul>
          </div>
          {/*Cartas*/}
          <div className="border-pastel-4 border-2 text-white rounded p-4 my-2">
            <h3 className="text-xl font-Monte font-bold">Contenido:</h3>
            <ul className="list-disc px-8 py-2 font-Poppins font-bold">
               <li>
                Información sobre la chica <br /> (Samantha)
               </li>
               <li>Galeria de imágenes de ella</li>
               <li>Próximamente: Notas</li>
            </ul>
          </div>
        </section>
        <h2 className="text-center text-4xl font-Monte font-semibold py-4 border-cyan-300 border-b-4 text-white bg-zinc-700">
          Tabla de contenido:
        </h2>
        <article className="grid grid-1 md:grid-cols-2 gap-4 py-4">
          <Card
            sound={playsound}
            evento={handleInfo}
            img={Card1}
            color="bg-rose-400"
            title="Información"
            code={
              <span className="whitespace-nowrap rounded-full bg-cyan-400 px-2.5 py-0.5 text-sm text-white m-3">
                Nuevo
              </span>
            }
            text="Aqui estara todo lo relacionado con La Compi, datos sobre ella, gustos, cualidades, virtudes, sus debilidades, entre otras cosas relacionadas con ella, para ver mas pulsa el boton(No aun)."
          />
          <Card
            sound={playsound}
            evento={handleRecuerdos}
            img={Card3}
            color="bg-green-300"
            title="Recuerdos"
            text="La pagina contendra recuerdos que tengo con ella y seran destacadas en este lugar, es como un album de momentos importantes con ella, espero no la moleste y disfrute de esta sección."
          />
        </article>
      </main>
    </>
  );
}
