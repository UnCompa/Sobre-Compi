import Header from "./../components/Header";
import {Helmet} from 'react-helmet'
import Icono from './../Imagenes/brillo.jpg'
export default function Recuerdos() {
  return (
    <>
    <Helmet>
        <title>Recuerdos | Momentos inolvidables</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Recuerdos" color={"bg-purple-300"}/>
      <main className="h-screen w-full bg-fondo">
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <article className="bg-pastel-4 h-52 w-full p-4 my-2">hola</article>
          <article className="bg-pastel-4 h-52 w-full p-4 my-2">hola</article>
          <article className="bg-pastel-4 h-52 w-full p-4 my-2">hola</article>
          <article className="bg-pastel-4 h-52 w-full p-4 my-2">hola</article>
          <article className="bg-pastel-4 h-52 w-full p-4 my-2">hola</article>
          <article className="bg-pastel-4 h-52 w-full p-4 my-2">hola</article>
        </section>
      </main>
    </>
  );
}
