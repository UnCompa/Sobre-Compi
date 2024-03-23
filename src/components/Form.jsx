import { useState } from "react"
import {FaDownload} from 'react-icons/fa6'
import { useNavigate } from "react-router-dom"

const Form = () => {
    const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()
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
        const publicId = data.public_id
        const newImage = {
          title: title,
          description: description,
          url: dataUrl,
          publicId: publicId
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
        navigate("/");
      }
  return (
    <div className=' bg-slate-50 container mx-auto border-2 border-pastel-4 my-4 p-4 shadow-lg'>
            <h2 className='font-Monte text-2xl'>Subir recuerdo</h2>
            <form action="" className='flex flex-col' onSubmit={(e)=>handleSubmit(e)}>
                <label className='font-Poppins py-1' htmlFor="">Titulo:</label>
                <input required onChange={(e)=> setTitle(e.target.value)} className='ring ring-pastel-4 px-1 font-Poppins focus:ring focus:ring-pastel-1' type="text" name="" id="" />
                <label className='font-Poppins py-1' htmlFor="">Descripcion:</label>
                <input required onChange={(e)=> setDescription(e.target.value)} className='ring ring-pastel-4 px-1 font-Poppins focus:ring focus:ring-pastel-1' type="text" name="" id="" />
                <label className='font-Poppins py-1' htmlFor="">Imagen:</label>
                <div>
                <div className="flex items-center justify-center gap-2 bg-pastel-4 w-full py-2 rounded-xl">
                <label htmlFor="inputUpload" className="font-Monte">Subir</label>
                <FaDownload/>
                </div>
                <input required id="inputUpload" className='hidden' type="file" name="hola" onChange={(e)=> setFile(e.target.files[0])}/>
                {file && <p className="font-Poppins">Archivo seleccionado: {file.name}</p>}
                </div>
                <button className='bg-pastel-1 my-2 px-4 py-2 rounded-md text-white font-Monte'>Enviar</button>
            </form>
          </div>
  )
}

export default Form