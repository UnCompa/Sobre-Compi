import Home from "./pages/home";
import Info from './pages/info'
import NoFound from './pages/nofound'
import { Routes, Route } from "react-router-dom";
import Recuerdos from './pages/recuerdos'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/informacion" element={<Info/>}/>
      <Route path="/recuerdos" element={<Recuerdos/>}/>
      <Route path="/*" element={<NoFound/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
  );
}

export default App;
