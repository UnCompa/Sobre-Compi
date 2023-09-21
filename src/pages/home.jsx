import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "./../components/Header";
function Home() {
  return (
    <>
      <div className="grid grid-rows-layout">
        <Header title="Inicio" color={"bg-pastel-1"} />
        <Main />
        <Footer phrase="La vida es una, asi que vivela con las personas que mas quieres" />
      </div>
    </>
  );
}

export default Home;
