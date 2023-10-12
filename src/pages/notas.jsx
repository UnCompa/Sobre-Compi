import Entradas from "../components/Entradas";
import Versiones from "../components/Version";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import {Helmet} from 'react-helmet'
import Icono from './../Imagenes/Icons/msg.png'
export default function Notas() {
  return (
    <>
      <Helmet>
        <title>Notas | Mensajes de estado</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <div className="grid-rows-layout">
        <Header title="Notas" color={"bg-pastel-5"} />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-1/1 flex-col">
            <Entradas
              nota={{
                id: 3,
                title: "Acabado",
                date: "12/10/2023",
                info: "Se acabo finalmente lo que queria, su regalo es este aunque espere muchos mas :3",
              }}
            />
            <Entradas
              nota={{
                id: 3,
                title: "Casi acabando",
                date: "28/09/2023",
                info: "Ya esta mucho mejor que antes, agregando cositas antes de terminar con todo, este sera mi regalo de navidad y gracias <3",
              }}
            />
            <Entradas
              nota={{
                id: 2,
                title: "Un Mensaje Especial",
                date: "20/09/2023",
                info: "Queria decir que espero le guste lo que estoy haciendo y lo valore, abrazos y un gusto",
              }}
            />
            <Entradas
              nota={{
                id: 1,
                title: "La primera de muchas",
                date: "17/09/2023",
                info: "Buenas :D",
              }}
            />
          </div>
          <div className="h-1/1 flex-col">
            <Versiones
              nota={{
                id: 1.0,
                title: "Acabando",
                date: "12/10/2023",
                info: "Agregue lo mas importante para mi, quizas se actualice pero quien sabe",
              }}
            />
            <Versiones
              nota={{
                id: 0.6,
                title: "Casi acabando",
                date: "28/09/2023",
                info: "Casi terminando la pagina, con lo que para mi es lo mas importante",
              }}
            />
            <Versiones
              nota={{
                id: 0.3,
                title: "Mejor inicio ♥",
                date: "20/09/2023",
                info: "El inicio fue termino por ahora, espero sea de su agrado",
              }}
            />
            <Versiones
              nota={{
                id: 0.2,
                title: "Notitas ♥",
                date: "17/09/2023",
                info: "Se mejoro el inicio ademas, de agregar el apartado Notas",
              }}
            />
            <Versiones
              nota={{
                id: 0.1,
                title: "Las bases de tu proyecto",
                date: "17/09/2023",
                info: "Se implemento las bases del proyecto",
              }}
            />
          </div>
        </div>
        <Footer phrase="Te quiero yo y tu a mi" />
      </div>
    </>
  );
}
