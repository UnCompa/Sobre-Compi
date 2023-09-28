import Header from "./../components/Header";
import Imagen from './../Imagenes/yo.jpg'
import Card from './../components/Card2'
import Programacion from "./../Imagenes/about.jpg";
import Footer from "../components/Footer";
export default function Sobremi() {
  return (
    <>
      <Header title="Sobre mi" color={"bg-cyan-300"} />
      <main className="bg-slate-800 h-full">
      <section className="container mx-auto h-full p-4 grid grid-cols-1 place-items-center md:grid-cols-3">
        <div className="h-72 w-72 bg-pastel-2 rounded-full mb-4">
          <img
            src={Imagen}
            alt="Imagen"
            className="h-full w-full object-cover border-white border-2 -z-10"
          />
        </div>
        <div className="bg-blue-300 h-full w-full col-span-2 p-8">
          <h2 className="text-2xl font-Monte pb-2 text-blue-900">
            Información general:
          </h2>
          <p className="font-Poppins">
            Es un chico de 17 años el cual se dedica a la creación de páginas webs como esta. Caracteristicas de son que mido 162cm me gusta el basquet y tambien programar
          </p>
          <ul className="list-disc px-8 font-Poppins py-4">
            <li>Tiene 17 años</li>
            <li>Mide 162cm aprox.</li>
            <li>Se llama Brandon</li>
            <li>Su cumple es en Septiembre</li>
            <li>Es conocido como el Compa</li>
          </ul>
        </div>
      </section>
      <section className="grid grid-1 md:grid-cols-2 gap-4 py-4 container mx-auto h-full">
        <Card color={'bg-blue-300'} img={Programacion} text={"Le encanta programar paginas, estas son normalmente para mejorar en esta area, ademas le gusta jugar basquet con sus amigos y en los tiempos libres practica algunas cosas"} title={"Aficiones"}/>
        <Card color={"bg-slate-600"} title={"Gustos"} img={Programacion} text={"Sus gustos son algo comunes, escucha musica de todo tipo, aunque prefiere canciones ritmicas como la electronica y el phonk."} />
        <Card title={"Personalidad"} color={"bg-cyan-400"} img={Programacion} text={"Como persona es alguien amigable, sociable tambien ayuda a los que pueda y deseen como pasar tiempo de calidad con los que mas ama"}/>
        <Card title={"Futuro"} color={"bg-purple-400"} img={Programacion} text={"El aspira a ser un gran diseñador y programador de lo que mas le gusta, tambien ser bueno en el deporte que le apasione que es el basquet, y se su mejor versión"}/>
      </section>
      </main>
      <Footer color={"bg-cyan-300"} phrase={"Todos son capaces de algo cuando descubren lo que aman"}/>
    </>
  );
}
