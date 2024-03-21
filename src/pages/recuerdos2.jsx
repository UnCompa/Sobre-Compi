import {Helmet} from 'react-helmet'
import Footer from "../components/Footer";
import Music from '../components/Music';
import Musica from "./../sound/Music.mp3";
import Header from '../components/Header';
import Icono from './../Imagenes/brillo.jpg'
import CardRecuerdos from './../components/CardRecuerdos'
import { useEffect, useState } from 'react';

const Recuerdos2 = () => {
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [datos, setImagenes] = useState([])
  
  useEffect(()=>{
    const api = "https://compis.onrender.com/api/images"
    fetch(api).then((res) => res.json()).then((data) => setImagenes(data))
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "Compis")
    const url = "https://api.cloudinary.com/v1_1/dgiq2rzid/image/upload"
    const res = await fetch(url, {
      method: "POST",
      body: formData
    })
    const data = await res.json()
    console.log(data);
    const dataUrl = data.secure_url
    const newImage = {
      title: title,
      description: description,
      url: dataUrl,
    }
    const api = "https://compis.onrender.com/api/images/upload"
    const response = await fetch(api,{
      method: "POST",
      body: JSON.stringify(newImage),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const dataResponse = await response.json()
    console.log(dataResponse);
  }
  return (
        <>
        <Helmet>
            <title>Recuerdos | Momentos inolvidables</title>
            <link rel="shortcut icon" href={Icono} type="image/x-icon" />
          </Helmet>
          <Header title="Recuerdos" color={"bg-purple-300"}/>
          <Music src={Musica} />
          <div className=' bg-zinc-950 container mx-auto border-2 border-pastel-4 my-4 p-4 shadow-lg'>
            <h2 className='font-Monte text-2xl text-white'>Subir recuerdo</h2>
            <form action="" className='flex flex-col' onSubmit={(e)=>handleSubmit(e)}>
                <label className='font-Poppins py-1 text-white' htmlFor="">Titulo:</label>
                <input onChange={(e)=> setTitle(e.target.value)} className='ring ring-pastel-4 px-1 font-Poppins focus:ring focus:ring-pastel-1' type="text" name="" id="" />
                <label className='font-Poppins py-1 text-white' htmlFor="">Descripcion:</label>
                <input onChange={(e)=> setDescription(e.target.value)} className='ring ring-pastel-4 px-1 font-Poppins focus:ring focus:ring-pastel-1' type="text" name="" id="" />
                <label className='font-Poppins py-1 text-white' htmlFor="">Imagen:</label>
                <input className='text-white' type="file" name="hola" id="" onChange={(e)=> setFile(e.target.files[0])}/>
                <button className='bg-pastel-1 my-2 px-4 py-2 rounded-md text-white'>Enviar</button>
            </form>
          </div>
          <main className="h-full w-full bg-fondo">
            <h2 className="font-Monte text-3xl my-4 py-4 px-4 bg-white inline-block rounded-lg text-center w-full">Fotos:</h2>
            <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 bg-opacity-40 my-4">
              {
                datos.map(data => {
                  console.log(data)
                    return (
                      <>
                        <CardRecuerdos title={data.title} frase={data.description} imagen={data.url} key={data.id} id={data.id}/>
                      </>
                    )
                })
              }
            </section>
          </main>
          <Footer color={"bg-purple-300"} phrase={"Los recuerdos del pasado son lo que definen tu futuro"}/>
        </>
  )
}

export default Recuerdos2