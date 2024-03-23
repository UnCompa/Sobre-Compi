import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Music from "../components/Music";
import Musica from "./../sound/Music.mp3";
import Header from "../components/Header";
import Icono from "./../Imagenes/brillo.jpg";
import CardRecuerdos from "./../components/CardRecuerdos";
import { useEffect, useState } from "react";
import Form from "../components/Form";

const Recuerdos2 = () => {
  const [datos, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true); // Cambia el estado inicial de loading a true

  useEffect(() => {
    const api = "https://compis.onrender.com/api/images";
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setImagenes(data);
        setLoading(false); // Cambia el estado de loading a false una vez que se han cargado los datos
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // En caso de error, asegúrate de cambiar el estado de loading a false también
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Recuerdos | Momentos inolvidables</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Recuerdos" color={"border-purple-300"} />
    <div className="bg-fondo">
      <Music src={Musica} /> 
      <main className="min-h-screen h-full w-full my-4">
      <Form/>
        <h2 className="font-Monte text-3xl my-2 py-4 px-4 bg-zinc-800 text-white inline-block text-center w-full">
          Fotos:
        </h2>
        <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 bg-opacity-40 px-4">
        {loading ? (
          <div className="col-span-5 animate-pulse bg-white">
            <h2 className="py-4 text-2xl font-bold text-center">Cargando...</h2>
          </div>
        ) : (
          // Mostrar los datos una vez que loading sea false
          datos.map((data) => (
            <>
                <CardRecuerdos
                  title={data.title}
                  frase={data.description}
                  imagen={data.url}
                  key={data.id}
                  id={data.id}
                  createdAt={data.createdAt}
                  updatedAt={data.updatedAt}
                />
            </>
          ))
          )}
          </section>
      </main>
      <Footer
        color={"bg-purple-300"}
        phrase={"Los recuerdos del pasado son lo que definen tu futuro"}
      />
    </div>
    </>
  );
};

export default Recuerdos2;
