import Home from "./pages/home";
import Info from './pages/info'
import NoFound from './pages/nofound'
import { Routes, Route } from "react-router-dom";
import Notas from "./pages/notas";
import Recuerdos from './pages/recuerdos'
import Sobremi from './pages/sobremi'
import {useSound} from 'use-sound'
import Musica from './sound/Music.mp3'
import { useEffect } from "react";
import Sound from "./components/Sound";
function App() {
  return (
    <Routes>
      <Route path="/Sobre-Compi/" element={<Home/>}/>
      <Route path="/Sobre-Compi/informacion" element={<Info/>}/>
      <Route path="/Sobre-Compi/notas" element={<Notas/>}/>
      <Route path="/Sobre-Compi/recuerdos" element={<Recuerdos/>}/>
      <Route path="/Sobre-Compi/sobremi" element={<Sobremi/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
  );
}

export default App;
