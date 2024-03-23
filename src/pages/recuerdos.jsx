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
import AmigaNew1 from './../Imagenes/recuerdosnew/1.jpg'
import AmigaNew2 from './../Imagenes/recuerdosnew/2.jpg'
import AmigaNew3 from './../Imagenes/recuerdosnew/3.jpg'
import AmigaNew4 from './../Imagenes/recuerdosnew/4.jpg'
import AmigaNew5 from './../Imagenes/recuerdosnew/5.jpg'
import AmigaNew6 from './../Imagenes/recuerdosnew/6.jpg'
import AmigaNew7 from './../Imagenes/recuerdosnew/7.jpg'
import AmigaNew8 from './../Imagenes/recuerdosnew/8.jpg'
import AmigaNew9 from './../Imagenes/recuerdosnew/9.jpg'
import AmigaNew10 from './../Imagenes/recuerdosnew/10.jpg'
import AmigaNew11 from './../Imagenes/recuerdosnew/11.jpg'
import AmigaNew12 from './../Imagenes/recuerdosnew/12.jpg'
import AmigaNew13 from './../Imagenes/recuerdosnew/13.jpg'
import AmigaNew14 from './../Imagenes/recuerdosnew/14.jpg'
import AmigaNew15 from './../Imagenes/recuerdosnew/15.jpg'
import AmigaNew16 from './../Imagenes/recuerdosnew/16.jpg'
import AmigaNew17 from './../Imagenes/recuerdosnew/17.jpg'
import AmigaNew18 from './../Imagenes/recuerdosnew/18.jpg'
import AmigaNew19 from './../Imagenes/recuerdosnew/19.jpg'
import AmigaNew20 from './../Imagenes/recuerdosnew/20.jpg'
import AmigaNew21 from './../Imagenes/recuerdosnew/21.jpg'
import AmigaNew22 from './../Imagenes/recuerdosnew/22.jpg'
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
        <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 bg-opacity-40 my-4">
          <CardRecuerdos imagen={Amiga1} frase={`Una foto de ella usando su mano para formar un corazon ♥`}/>
          <CardRecuerdos imagen={Amiga2} frase={`Un de mis favoritas, se tomo en frente de su espejo`}/>
          <CardRecuerdos imagen={Amiga3} frase={`Este es un dibuje que le hice como regalo de mi parte`}/>
          <CardRecuerdos imagen={Amiga4} frase={`Una foto bonita, uso un filtro de nubes ademas de que se tapa su boca, que astetic`}/>
          <CardRecuerdos imagen={Amiga5} frase={`Esta es la primera foto que recuerdo de ella, con una mariposa que resalta todo`}/>
          <CardRecuerdos imagen={AmigaNew1} frase={`Usando un filtro de un recuadro verde, que bien le queda`}/>
          <CardRecuerdos imagen={AmigaNew2} frase={`Aqui se aprecia su ojo totalmente`}/>
          <CardRecuerdos imagen={AmigaNew3} frase={`Foto donde se aprecia mejor su linda cara, con filtro que la rodea de corazones`}/>
          <CardRecuerdos imagen={AmigaNew4} frase={`Foto donde se tapa el rostro con su mano`}/>
          <CardRecuerdos imagen={AmigaNew5} frase={`Aqui usa un filtro que la rodea de fantasmas, tapándose la carita `}/>
          <CardRecuerdos imagen={AmigaNew6} frase={`Un recuerdo de como es muy buena pintandose las uñas`}/>
          <CardRecuerdos imagen={AmigaNew7} frase={`En esta foto se aprecia su hermoso delineado`}/>
          <CardRecuerdos imagen={AmigaNew8} frase={`Como la anterior pero con otra perspectiva `}/>
          <CardRecuerdos imagen={AmigaNew9} frase={`Un marco con ella tapándose con un papel`}/>
          <CardRecuerdos imagen={AmigaNew10} frase={`Una de las fotos mas antiguas que tiene de ella`}/>
          <CardRecuerdos imagen={AmigaNew11} frase={`Foto de ella tapándose la carita con su mano :)`}/>
          <CardRecuerdos imagen={AmigaNew12} frase={`Aqui se aprecia ella usando mascarilla`}/>
          <CardRecuerdos imagen={AmigaNew13} frase={`Foto con el marco en un lugar que desconozco `}/>
          <CardRecuerdos imagen={AmigaNew14} frase={`En esta foto se la aprecia de mejor manera aunque un poco seria`}/>
          <CardRecuerdos imagen={AmigaNew15} frase={`Usando un filtro de corazones negro, al parecer estaba aburrida`}/>
          <CardRecuerdos imagen={AmigaNew16} frase={`Un foto similar a otra, solo que usando otro filtro al parecer`}/>
          <CardRecuerdos imagen={AmigaNew17} frase={`Aqui se aprecia un anterior filtro de otra perspectiva `}/>
          <CardRecuerdos imagen={AmigaNew18} frase={`Una de las mejores, se aprecia usando un vestido, con sus lentes que le quedan bien, y usando un filtro que da corazones a su rostro`}/>
          <CardRecuerdos imagen={AmigaNew19} frase={`La misma foto para apreciar su belleza`}/>
          <CardRecuerdos imagen={AmigaNew20} frase={`Como la anterior solo que con mariposas a su alrededor `}/>
          <CardRecuerdos imagen={AmigaNew21} frase={`Un foto muy buena con ella haciendo su pose clásica `}/>
          <CardRecuerdos imagen={AmigaNew22} frase={`Con su pose clásica solo que tiene corazones sobre ella`}/>
        </section>
      </main>
      <Footer color={"bg-purple-300"} phrase={"Los recuerdos del pasado son lo que definen tu futuro"}/>
    </>
  );
}
