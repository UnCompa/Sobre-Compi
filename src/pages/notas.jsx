import Entradas from "../components/Entradas";
import Versiones from '../components/Version'
import Footer from "../components/Footer";
import Header from "./../components/Header";
export default function Notas() {
  return (
    <>
      <div className="grid-rows-layout">
        <Header title="Notas" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-1/1 flex-col">
            <Entradas
              nota={{
                id: 1,
                title: "La primera de muchas",
                date: "17/09/2023",
                info: "XD",
              }}
            />
          </div>
          <div className="h-1/1 flex-col">
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
