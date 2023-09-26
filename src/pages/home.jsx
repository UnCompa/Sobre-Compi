import Footer from "../components/Footer";
import Main from "../components/Main";
import Sound from "../components/Sound";
import Header from "./../components/Header";
import Icono from './../Imagenes/Icons/casa.png'
import {Helmet} from 'react-helmet'
function Home() {
  return (
    <>
    <Sound counter={"1"}/>
      <div className="grid grid-rows-layout">
        <Helmet>
          <title>Inicio | Todo lo destacado</title>
          <link rel="shortcut icon" href={Icono} type="image/x-icon" />
        </Helmet>
        <Header title="Inicio" color={"bg-pastel-1"} />
        <Main />
        <Footer phrase="La vida es una, asi que vivela con las personas que mas quieres" color={"bg-pastel-1"}/>
      </div>
    </>
  );
}

export default Home;
