import Home from "./pages/home";
import Info from './pages/info'
import NoFound from './pages/nofound'
import { Routes, Route } from "react-router-dom";
import Notas from "./pages/notas";
import Recuerdos2 from "./pages/recuerdos2";
function App() {

  return (
<<<<<<< HEAD
    <>
      <h1>Hola mundo</h1>
      <p>
        XD
      </p>
    </>
  )
=======
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/informacion" element={<Info/>}/>
      <Route path="/recuerdos" element={<Recuerdos2/>}/>
      <Route path="/notas" element={<Notas/>}/>
      <Route path="/notas" element={<Notas/>}/>
      <Route path="/*" element={<NoFound/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
  );
>>>>>>> Casa
}

export default App;
