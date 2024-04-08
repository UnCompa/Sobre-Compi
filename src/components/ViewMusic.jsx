import { useEffect, useState } from "react";
import Loader from "./Loader";
import AudioPlayer from "react-h5-audio-player";
import { deleteFile, uploadFile } from "../firebase/storage";
import { allAudios, createAudio, deleteAudio } from "../utils/apiAudio";
import "./../styles/audioplayer.css";
export default function ViewMusic() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Inicio");
    setLoading(true)
    const url = await uploadFile(file, file.name);
    setLoading(false)
    console.log("Fin carga");
    const newAudio = {
      url: url,
      name: file.name,
    };
    const res = await createAudio(newAudio);
    console.log(res);
    window.location.reload();

  };
  const handleDelete = async (id, name) => {
    setLoading(true)
    const res = await deleteAudio(id);
    const dataResponse = deleteFile(name);
    setLoading(false)
    console.log(res);
    console.log(dataResponse);
    window.location.reload();
  };
  useEffect(() => {
    const loadImgs = async () => {
      const data = await allAudios();
      setData(data);
    };
    loadImgs();
  }, []);

  return (
    <>
      <form
        className="flex flex-col bg-zinc-800 font-Poppins w-full h-max p-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-3xl py-2">Sube tu audio</h2>
        <label
          htmlFor="fileInput"
          className="bg-green-900 shadow-xl border-none px-4 my-2 py-1 rounded-full w-max cursor-pointer"
        >
          Buscar archivo
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept="audio/*"
            onChange={(e) => handleFileChange(e)}
          />
        </label>
        {file && (
          <p className="text-zinc-100">Archivo seleccionado: {file.name}</p>
        )}
        {loading ? <Loader text="" /> : <></>}
        <button
          className="w-full py-2 hover:bg-green-900 bg-green-700 disabled:bg-green-950 transition-colors"
          disabled={file === null}
        >
          Enviar
        </button>
      </form>
      <main>
        <section className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          {data.map((audio) => {
            return (
              <div
                key={audio.id}
                className="bg-zinc-800 h-max font-Poppins p-4"
              >
                <h2 className="py-2 font-thin text-zinc-300">{audio.name}</h2>
                <AudioPlayer
                  className="flex gap-2 bg-zinc-900 text-white"
                  src={audio.url}
                />
                <button
                  className="bg-red-700 px-4 py-2 rounded my-2"
                  onClick={() => handleDelete(audio.id, audio.name)}
                >
                  Borrar
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
