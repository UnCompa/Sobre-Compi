import Header from "./../components/Header";
import Helmet from "react-helmet";
import Icono from "./../Imagenes/brillo.jpg";
//import { uploadFile } from "../firebase/storage";
import { useState } from "react";
import ViewImage from "../components/ViewImage";
import ViewMusic from "../components/ViewMusic";
export default function Multimedia() {
  const [tab, setTab] = useState(1);
  /*const handleUploadFile = async(e) => {
    e.preventDefault()
    const file = e.target.files[0]
    const url = await uploadFile(file)
    console.log(url);
  }*/
  return (
    <>
      <Helmet>
        <title>Multimedia | Mensajes de estado</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Multimedia" color={"border-green-500"} />
      <main className="bg-black">
        <nav className="w-full">
          <ul className="flex items-center gap-x-2 justify-evenly">
            <li className="w-full py-2">
              <button onClick={() => setTab(1)} className={`bg-zinc-800 py-2 w-full border-b-2  ${tab === 1 ? "border-green-500" : ""}`}>
                Imagenes
              </button>
            </li>
            <li className="w-full py-4">
              <button onClick={() => setTab(2)} className={`bg-zinc-800 py-2 w-full border-b-2  ${tab === 2 ? "border-green-500" : ""}`}>
                Audios
              </button>
            </li>
            <li className="w-full py-4">
              <button onClick={() => setTab(3)} className={`bg-zinc-800 py-2 w-full border-b-2  ${tab === 3 ? "border-green-500" : ""}`}>
                Videos
              </button>
            </li>
          </ul>
        </nav>
        <section>
          {tab === 1 && <ViewImage/>}
          {tab === 2 && <ViewMusic/>}
          {tab === 3 && <h1>Contenido de Videos</h1>}
        </section>
      </main>
    </>
  );
}
