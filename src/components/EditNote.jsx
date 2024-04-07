import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { allNotes, findNote } from "../utils/apiNotes";
import NotaCard from "./NotaCard";
import Linkify from "react-linkify";
function EditNote() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await findNote(id);
        console.log(data);
        setNote(data);
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };
    fetchData();
  }, [id]);
  useEffect(() => {
    const notas = async () => {
      const data = await allNotes()
      setLoading(true)
      setData(data)
      setLoading(false)
    }
    notas()
  }, [])
  if (!note) {
    return (
      <>
        <Header color={"bg-cyan-500"} title={"Notas Detalles"} />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Header color={"border-cyan-500"} title={"Notas Detalles"} />
      <div className="grid grid-cols-1 lg:grid-cols-3">
      <main className="container border-b-2 lg:border-b-0 h-screen mx-auto p-6 font-Poppins text-white bg-zinc-950/10 col-span-2">
        <div className="border-b-2 border-b-cyan-500 py-2">
          <h2 className="text-3xl capitalize font-bold">{note.title}</h2>
          <div className="flex gap-x-2">
            <p className="font-extralight text-zinc-500">Autor: {note.autor}</p>
            <p className="font-extralight text-zinc-500">Creado: {note.createdAt}</p>
            <p className="font-extralight text-zinc-500">Actualizado: {note.updatedAt}</p>
          </div>
        </div>
        <div className="py-4">
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a
              href={decoratedHref}
              key={key}
              style={{ color: "#0af" }}
            >
              {decoratedText}
            </a>
          )}
        >
          {note.content}
        </Linkify>
        </div>
      </main>
      <aside className="p-4 overflow-y-auto h-screen">
        <h3 className="text-2xl font-bold py-4">Mas notas: </h3>
        {loading ? (
            <Loader/>
          ): (
            <>
            <div className="grid grid-cols-1 gap-4">
            {
              data.map((note)=> {
                return (
                  <NotaCard id={note.id} key={note.id} title={note.title} autor={note.autor} content={note.content} important={note.important}/>
                )
              })
            }
          </div></>
          )}
      </aside>
      </div>
    </>
  );
}

export default EditNote;
