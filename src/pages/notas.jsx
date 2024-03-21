import Footer from "../components/Footer";
import Header from "./../components/Header";
import { Helmet } from "react-helmet";
import Icono from "./../Imagenes/Icons/msg.png";
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
          
        </div>
        <Footer phrase="Te quiero yo y tu a mi" />
      </div>
    </>
  );
}
