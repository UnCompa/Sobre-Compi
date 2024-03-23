import Footer from "../components/Footer";
import Header from "./../components/Header";
import { Helmet } from "react-helmet";
import Icono from "./../Imagenes/Icons/msg.png";
import Music from "../components/Music";
import FormNotaCreate from "../components/FormNotaCreate";
import NotaCard from "../components/NotaCard";
import { useEffect, useState } from "react";
import { allNotes } from "../utils/apiNotes";
import { Spinner } from "@nextui-org/react";
export default function Notas() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const notas = async () => {
      const data = await allNotes()
      setLoading(true)
      setData(data)
      setLoading(false)
    }
    notas()
  }, [])
  
  return (
    <div className="bg-zinc-800">
      <Helmet>
        <title>Notas | Mensajes de estado</title>
        <link rel="shortcut icon" href={Icono} type="image/x-icon" />
      </Helmet>
      <Header title="Notas" color={"border-pink-500"} />
      <Music />
      <FormNotaCreate/>
      <main className="min-h-screen h-full container mx-auto p-4">
          {loading ? (
            <div className="w-full container mx-auto grid place-content-center">
              <Spinner size="lg" color="secondary" label="Cargando notas"/>
            </div>
          ): (
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              data.map((note)=> {
                return (
                  <NotaCard id={note.id} key={note.id} title={note.title} autor={note.autor} content={note.content} important={note.important}/>
                )
              })
            }
          </div></>
          )}
      </main>
      <Footer color={"bg-pink-300"} phrase="Te quiero yo y tu a mi" />
    </div>
  );
}
