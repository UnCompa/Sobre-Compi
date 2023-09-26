import Header from "./../components/Header";
import {Helmet} from 'react-helmet'
import Icono from './../Imagenes/brillo.jpg'
import CardRecuerdos from '../components/CardRecuerdos'
/*Imagenes*/
import Imagen from './../Imagenes/nada.jpg'
import Amiga1 from './../Imagenes/recuerdos/amiga1.jpeg'
import Amiga2 from './../Imagenes/recuerdos/amiga2.jpg'
import Amiga3 from './../Imagenes/recuerdos/amiga3.png'
import Amiga4 from './../Imagenes/recuerdos/amiga4.jpg'
import Amiga5 from './../Imagenes/recuerdos/amiga5.jpg'
import Footer from "../components/Footer";
export default function Recuerdos() {
  return (
    <>
    <Helmet>
        <title>Recuerdos | Momentos inolvidables</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Recuerdos" color={"bg-purple-300"}/>
      <main className="h-full w-full bg-fondo">
        <h2 className="font-Monte text-3xl my-4 py-4 px-4 bg-white inline-block rounded-lg text-center w-full">Fotos:</h2>
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 bg-opacity-40 bg-pastel-1">
          <CardRecuerdos imagen={Amiga1} frase={`Una foto de ella usando su mano para formar un corazon ♥`}/>
          <CardRecuerdos imagen={Amiga2} frase={`Un de mis favoritas, se tomo en frente de su espejo`}/>
          <CardRecuerdos imagen={Amiga3} frase={`Este es un dibuje que le hice como regalo de mi parte`}/>
          <CardRecuerdos imagen={Amiga4} frase={`Una foto bonita, uso un filtro de nubes ademas de que se tapa su boca, que astetic`}/>
          <CardRecuerdos imagen={Amiga5} frase={`Esta es la primera foto que recuerdo de ella, con una mariposa que resalta todo`}/>
        </section>
        <h2 className="font-Monte text-3xl my-4 py-4 px-4 bg-white inline-block rounded-lg text-center w-full">Conversaciones:</h2>
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 bg-opacity-40 bg-pastel-1">
          <CardRecuerdos imagen={Imagen} frase={"nada de momento"}/>
          <CardRecuerdos imagen={Imagen} frase={"nada de momento"}/>
          <CardRecuerdos imagen={Imagen} frase={"nada de momento"}/>
          <CardRecuerdos imagen={Imagen} frase={"nada de momento"}/>
        </section>
      </main>
      <Footer color={"bg-purple-300"} phrase={"Los recuerdos del pasado son lo que definen tu futuro"}/>
    </>
  );
}
