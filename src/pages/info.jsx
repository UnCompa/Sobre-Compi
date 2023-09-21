import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "./../components/Header";
import Imagen from "./../Imagenes/a1.jpg";
import Brillo from './../Imagenes/brillo.jpg'
import Card from "./../components/Card2";
import Card1 from "./../Imagenes/info.jpg";
import Card2 from "./../Imagenes/notas.jpg";
function Info() {
  return (
    <>
      <Header title="Informacion" color={"bg-pastel-2"} />
      <section className="container mx-auto h-full p-4 m-4 grid grid-cols-1 place-items-center md:grid-cols-3">
        <div className="h-56 w-56 bg-pastel-2 rounded-full">
          <img src={Imagen} alt="Imagen" className="h-full w-full object-cover rounded-full border-8 border-pastel-3" />
          <img src={Brillo} alt="Xd" className="absolute top-36 h-24 left-96"/>
        </div>
        <div className="bg-pastel-3 h-full w-full col-span-2 p-8 rounded-md">
          <h2>Información:</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam alias nisi vitae suscipit cupiditate magnam quo dolorem sed, a pariatur in molestiae ullam quibusdam possimus facilis quos quae deleniti!</p>
          <ul className="list-disc px-8">
            <li>Texto</li>
            <li>Texto</li>
            <li>Texto</li>
            <li>Texto</li>
            <li>Texto</li>
          </ul>
        </div>
      </section>
      <div></div>
      <article className="grid grid-1 md:grid-cols-2 gap-4 py-4 container mx-auto h-full">
      <Card img={Card1} color="bg-green-400" title='Sus gustos' text=""/>
      <Card img={Card2} color="bg-red-400" title='Defectos' text="En esta sección estara notas, palabras que menciono a La Compi e información relevante, ademas de incluir notas que se iran actualizando de a poco a poco para ver mas pulsa el boton."/>
      <Card img={Card1} color="bg-green-400" title='Cualidades' text=""/>
      <Card img={Card2} color="bg-red-400" title='Debilidades' text="En esta sección estara notas, palabras que menciono a La Compi e información relevante, ademas de incluir notas que se iran actualizando de a poco a poco para ver mas pulsa el boton."/>
      </article>
      <Footer phrase={"Hay cosas buenas y malas de nosotros pero eso nos hace personas :D"} color={"bg-pastel-2"}/>
    </>
  );
}

export default Info;
