import { useEffect, useState } from "react";
import Loader from "./Loader";
import { deleteFile, uploadFile } from "../firebase/storage";
import "./../styles/audioplayer.css";
import { allVideos, createVideo, deleteVideo } from "../utils/apiVideo";
export default function ViewVideo() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const url = await uploadFile(file, file.name);
    const newVideo = {
        url: url,
        name: file.name,
    };
    const res = await createVideo(newVideo);
    setLoading(false)
    console.log(res);
    window.location.reload();

  };
  const handleDelete = async (id, name) => {
    setLoading(true)
    const res = await deleteVideo(id);
    const dataResponse = deleteFile(name);
    setLoading(false)
    console.log(res);
    console.log(dataResponse);
    window.location.reload();
  };
  useEffect(() => {
    const loadImgs = async () => {
      const data = await allVideos();
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
        <h2 className="text-3xl py-2">Sube tu video</h2>
        <label
          htmlFor="fileInput"
          className="bg-green-900 shadow-xl border-none px-4 my-2 py-1 rounded-full w-max cursor-pointer"
        >
          Buscar archivo
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept="video/*"
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
          {data.map((video) => {
            return (
              <div
                key={video.id}
                className="bg-zinc-800 h-max font-Poppins p-4"
              >
                <video className="aspect-video w-full h-full" src={video.url} controls></video>
                <p className="italic py-2">{video.name}</p>
                <p className="italic text-zinc-500">Creado: {video.createdAt}</p>
                <button
                  className="bg-red-700 px-4 py-2 rounded my-2"
                  onClick={() => handleDelete(video.id, video.name)}
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
