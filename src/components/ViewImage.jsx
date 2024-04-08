import { useEffect, useState } from "react";
import { allImgs, createImg, deleteImg } from "../utils/apiImages";
import { deleteFile, uploadFile } from "../firebase/storage";
import Loader from "./Loader";

export default function ViewImage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const url = await uploadFile(file, file.name);
    const newImage = {
      url: url,
      name: file.name,
    };
    console.log(url);
    const res = await createImg(newImage);
    setLoading(false)
    console.log(res);
    window.location.reload();
  };
  const handleDelete = async (id,name) => {
    const res = await deleteImg(id)
    console.log(res);
    const dataResponse = deleteFile(name)
    console.log(dataResponse);
    window.location.reload();
  }
  useEffect(() => {
    const loadImgs = async () => {
      const data = await allImgs();
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
        <h2 className="text-3xl py-2">Sube tu imagen</h2>
        <label
          htmlFor="fileInput"
          className="bg-green-900 shadow-xl border-none px-4 my-2 py-1 rounded-full w-max cursor-pointer"
        >
          Buscar archivo
          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => handleFileChange(e)}
          />
        </label>
        {file && (
          <p className="text-zinc-100">Archivo seleccionado: {file.name}</p>
        )}
        {loading ? <Loader text="" /> : <></>}
        <button className="w-full py-2 hover:bg-green-900 bg-green-700 disabled:bg-green-950 transition-colors" disabled={file === null} >Enviar</button>
      </form>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {data.map((imgs) => {
            return (
              <div key={imgs.id} className="bg-zinc-800 h-full font-Poppins p-4">
                <figure className="w-full h-max">
                  <img
                    className="aspect-square rounded object-cover w-full h-full"
                    src={imgs.url}
                    alt=""
                  />
                </figure>
                  <h2 className="italic">{imgs.name}</h2>
                <div className="flex">
                  <p className="text-zinc-500 italic">Creado: {imgs.createdAt}</p>
                </div>
                <button className="bg-red-700 px-4 py-2 rounded my-2" onClick={() => handleDelete(imgs.id,imgs.name)}>Borrar</button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
