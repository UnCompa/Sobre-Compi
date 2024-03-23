import { Routes, Route } from "react-router-dom";
import Notas from "./pages/notas";
import ImageDetails from "./pages/imageDetails";
import UpdateImage from "./pages/updateImage";
import NoFound from "./pages/nofound";
import { lazy, Suspense } from "react";
import LoadingPage from "./components/LoadingPage";
const Home = lazy(() => import("./pages/home"));
const Info = lazy(() => import("./pages/info"));
const Recuerdos2 = lazy(() => import("./pages/recuerdos2"));
function App() {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Info />} />
        <Route path="/recuerdos" element={<Recuerdos2 />} />
        <Route path="/recuerdos/:id" element={<ImageDetails />} />
        <Route path="/recuerdos/update/:id" element={<UpdateImage />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
