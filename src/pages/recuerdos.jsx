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
      <Header title="Recuerdos" />
    </>
  );
}
