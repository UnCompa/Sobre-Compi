import Footer from "../components/Footer";
import Header from "./../components/Header";
import Imagen from './../Imagenes/recuerdosnew/7.jpg'
import Brillo from "./../Imagenes/brillo.jpg";
import { Helmet } from "react-helmet";
import Icono from "./../Imagenes/Icons/libreta.png";
import Tabla from './../components/Table'
import Tiempo from "../components/Time";
import Music from "../components/Music";
import Musica from "./../sound/Music.mp3";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
function Info() {
  const [years,setYears] = useState(0)
  const initialDate2 = dayjs("2008-03-07");
  useEffect(()=>{
    const calculateYears = () => {
      const currentDate = dayjs(); // Fecha actual
      const yearsElapsed = currentDate.diff(initialDate2, 'year'); // Años transcurridos
      setYears(yearsElapsed); // Actualiza el estado de los años
    };

    // Llama a la función para calcular los años inmediatamente
    calculateYears();

    // Configura un intervalo para actualizar los años cada año
    const interval = setInterval(() => {
      calculateYears();
    }, 1000 * 60 * 60 * 24 * 365); // Actualizar cada año
    return () => (clearInterval(interval))
  },[initialDate2])
  return (
    <>
      <Helmet>
        <title>Información | Acerca de ella</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Informacion" color={"bg-pastel-2"} />
      <Music src={Musica} />
      <section className="container mx-auto h-full p-4 m-4 grid grid-cols-1 place-items-center md:grid-cols-3">
        <div className="h-56 w-56 bg-pastel-2 rounded-full">
          <img
            src={Imagen}
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
            Es una chica de {years} años a la que le gusta que la llamen Sam o Sami.
            Su altura es de 160 cm. En estos momentos, está bien y se siente
            bien con su cuerpo y mente.
          </p>
          <p className="font-Poppins">
            Ella nació el <strong>07 de marzo del 2008</strong>, una fecha especial que siempre celebrará.
          </p>
          <ul className="list-disc px-8 font-Poppins">
            <li>Tiene {years} años</li>
            <li>Mide 160cm aproximadamente</li>
            <li>Se llama Samantha Guañuna Valentina Castillo</li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto w-full bg-slate-400">
          <h3 className="text-3xl text-white font-Poppins text-center p-4">Amistad⌛</h3>
          <Tiempo/>
      </section>
      <Tabla/>
      <Footer
        phrase={
          "Hay cosas buenas y malas de nosotros pero eso nos hace personas"
        }
        color={"bg-pastel-2"}
      />
    </>
  );
}

export default Info;
