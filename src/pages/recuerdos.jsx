import Header from "./../components/Header";
import {Helmet} from 'react-helmet'
import Icono from './../Imagenes/brillo.jpg'
import CardRecuerdos from '../components/CardRecuerdos'
import Footer from "../components/Footer";
/*Imagenes*/
import Amiga1 from './../Imagenes/recuerdos/amiga1.jpeg'
import Amiga2 from './../Imagenes/recuerdos/amiga2.jpg'
import Amiga3 from './../Imagenes/recuerdos/amiga3.png'
import Amiga4 from './../Imagenes/recuerdos/amiga4.jpg'
import Amiga5 from './../Imagenes/recuerdos/amiga5.jpg'
//Capturas
import Toma1 from './../Imagenes/Amiga/compi1.jpg'
import Toma2 from './../Imagenes/Amiga/compi2.jpg'
import Toma3 from './../Imagenes/Amiga/compi3.jpg'
import Toma4 from './../Imagenes/Amiga/compi4.jpg'
import Toma5 from './../Imagenes/Amiga/compi5.jpg'
import Toma6 from './../Imagenes/Amiga/compi6.jpg'
import Toma7 from './../Imagenes/Amiga/compi7.jpg'
import Toma8 from './../Imagenes/Amiga/compi8.jpg'
import Toma9 from './../Imagenes/Amiga/compi9.jpg'
import Toma10 from './../Imagenes/Amiga/compi10.jpg'
import Toma11 from './../Imagenes/Amiga/compi11.jpg'
import Toma12 from './../Imagenes/Amiga/compi12.jpg'
import Toma13 from './../Imagenes/Amiga/compi13.jpg'
import Toma14 from './../Imagenes/Amiga/compi14.jpg'
import Toma15 from './../Imagenes/Amiga/compi15.jpg'
import Toma16 from './../Imagenes/Amiga/compi16.jpg'
import Toma17 from './../Imagenes/Amiga/compi17.jpg'
import Music from "./../components/Music";
import Musica from "./../sound/Music.mp3";
export default function Recuerdos() {
  return (
    <>
    <Helmet>
        <title>Recuerdos | Momentos inolvidables</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Recuerdos" color={"bg-purple-300"}/>
      <Music src={Musica} />
      <main className="h-full w-full bg-fondo">
        <h2 className="font-Monte text-3xl my-4 py-4 px-4 bg-white inline-block rounded-lg text-center w-full">Fotos:</h2>
        <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 bg-opacity-40">
          <CardRecuerdos imagen={Amiga1} frase={`Una foto de ella usando su mano para formar un corazon ♥`}/>
          <CardRecuerdos imagen={Amiga2} frase={`Un de mis favoritas, se tomo en frente de su espejo`}/>
          <CardRecuerdos imagen={Amiga3} frase={`Este es un dibuje que le hice como regalo de mi parte`}/>
          <CardRecuerdos imagen={Amiga4} frase={`Una foto bonita, uso un filtro de nubes ademas de que se tapa su boca, que astetic`}/>
          <CardRecuerdos imagen={Amiga5} frase={`Esta es la primera foto que recuerdo de ella, con una mariposa que resalta todo`}/>
        </section>
        <h2 className="font-Monte text-3xl my-4 py-4 px-4 bg-white inline-block rounded-lg text-center w-full">Conversaciones:</h2>
        <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 bg-opacity-40">
          <CardRecuerdos imagen={Toma1} frase={"Primera interacción"}/>
          <CardRecuerdos imagen={Toma2} frase={"Conociendoce..."}/>
          <CardRecuerdos imagen={Toma3} frase={"Buscando maneras"}/>
          <CardRecuerdos imagen={Toma4} frase={"Con algo de miedo"}/>
          <CardRecuerdos imagen={Toma5} frase={"Mejorando"}/>
          <CardRecuerdos imagen={Toma6} frase={"Contando aficiones"}/>
          <CardRecuerdos imagen={Toma7} frase={"En busca de más"}/>
          <CardRecuerdos imagen={Toma8} frase={"Agarrando confianza"}/>
          <CardRecuerdos imagen={Toma9} frase={"Propuestas dificiles"}/>
          <CardRecuerdos imagen={Toma10} frase={"Su psicologo"}/>
          <CardRecuerdos imagen={Toma11} frase={"Una gran fiesta"}/>
          <CardRecuerdos imagen={Toma12} frase={"Contando cosas"}/>
          <CardRecuerdos imagen={Toma13} frase={"Descubriendo"}/>
          <CardRecuerdos imagen={Toma14} frase={"Esperando su numero de telefono"}/>
          <CardRecuerdos imagen={Toma15} frase={"Contando experiencias pasadas"}/>
          <CardRecuerdos imagen={Toma16} frase={"Buscando olvidar y perdonar"}/>
          <CardRecuerdos imagen={Toma17} frase={"Descubriendo sus aficiones..."}/>
        </section>
        <h2 className="font-Monte text-3xl my-4 py-4 px-4 bg-white inline-block rounded-lg text-center w-full">Imagenes:</h2>
      </main>
      <Footer color={"bg-purple-300"} phrase={"Los recuerdos del pasado son lo que definen tu futuro"}/>
    </>
  );
}
