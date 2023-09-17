import Home from "./pages/home";
import Info from './pages/info'
import NoFound from './pages/nofound'
import { Routes, Route } from "react-router-dom";
import Notas from "./pages/notas";
function App() {
  return (
    <Routes>
      <Route path="/Sobre-Compi/" element={<Home/>}/>
      <Route path="/Sobre-Compi/informacion" element={<Info/>}/>
      <Route path="/Sobre-Compi/notas" element={<Notas/>}/>
      <Route path="/Sobre-Compi/recuerdos" element={<Info/>}/>
      <Route path="/Sobre-Compi/sobremi" element={<Info/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
  );
}

export default App;
