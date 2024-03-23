import Home from "./pages/home";
import Info from './pages/info'
import NoFound from './pages/nofound'
import { Routes, Route } from "react-router-dom";
import Notas from "./pages/notas";
import Recuerdos2 from "./pages/recuerdos2";
import ImageDetails from "./pages/imageDetails";
import UpdateImage from "./pages/updateImage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/informacion" element={<Info/>}/>
      <Route path="/recuerdos" element={<Recuerdos2/>}/>
      <Route path="/recuerdos/:id" element={<ImageDetails/>}/>
      <Route path="/recuerdos/update/:id" element={<UpdateImage/>}/>
      <Route path="/notas" element={<Notas/>}/>
      <Route path="/notas" element={<Notas/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
  );
}

export default App;
