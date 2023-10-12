import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "./../components/Header";
import Imagen from "./../Imagenes/a1.jpg";
import ImagenAlt from "./../Imagenes/alt.jpg";
import Brillo from "./../Imagenes/brillo.jpg";
import { Helmet } from "react-helmet";
import Icono from "./../Imagenes/Icons/libreta.png";
import Tabla from './../components/Table'
import Tiempo from "../components/Tiempo";
import Music from './../sound/Music.mp3'
function Info() {
  return (
    <>
      <Helmet>
        <title>Información | Acerca de ella</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Informacion" color={"bg-pastel-2"} />
      <section className='bg-slate-400 container mx-auto h-24'>
            <div className='p-6'>
            <audio src={Music} controls autoPlay className='w-full bg-slate-900 rounded-lg shadow-xl' loop></audio>
            </div>
        </section>
      <section className="container mx-auto h-full p-4 m-4 grid grid-cols-1 place-items-center md:grid-cols-3">
        <div className="h-56 w-56 bg-pastel-2 rounded-full">
          <img
            src={ImagenAlt}
            alt="Imagen"
            className="h-full w-full object-cover rounded-full border-8 border-pastel-3 -z-10"
          />
          <img src={Brillo} alt="Xd" className="absolute h-20 top-24 -z-10" />
        </div>
        <div className="bg-pastel-3 h-full w-full col-span-2 p-8 rounded-md">
          <h2 className="text-2xl font-Monte pb-2 text-rose-900">
            Información general:
          </h2>
          <p className="font-Poppins">
            Es una chica de 15 años a la que le gusta que la llamen Sam o Sami.
            Su altura es de 160 cm. En estos momentos, está bien y se siente
            bien con su cuerpo y mente.
          </p>
          <p className="font-Poppins">
            Ella nació el 07/03/2007, una fecha especial que siempre celebrará.
          </p>
          <ul className="list-disc px-8 font-Poppins">
            <li>Tiene 15 años</li>
            <li>Mide 160cm aprox.</li>
            <li>Se llama Sam</li>
            <li>Su cumple es en marzo</li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto w-full bg-slate-400">
          <h3 className="text-3xl text-white font-Poppins text-center p-4">Tiempo</h3>
          <Tiempo/>
      </section>
      <Tabla/>
      <Footer
        phrase={
          "Hay cosas buenas y malas de nosotros pero eso nos hace personas :D"
        }
        color={"bg-pastel-2"}
      />
    </>
  );
}

export default Info;
