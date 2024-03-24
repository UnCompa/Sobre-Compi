import { Input } from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useState } from "react";
import {createNote} from './../utils/apiNotes.js'
function FormNotaCreate() {
  const [title, setTitle] = useState("")
  const [autor, setAutor] = useState("")
  const [content, setContent] = useState("")
  const [important, setImportant] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const newNote = {
      title,
      autor,
      content,
      important
    }
    const nota = await createNote(newNote)
    console.log(nota);
    setTitle("")
    setAutor("")
    setContent("")
    setImportant(false)
    window.location.reload();
  }
  return (
    <div className="container mx-auto">
        <form action="" className="bg-slate-950 p-4 rounded shadow-lg flex flex-col gap-y-2">
            <h3 className="text-3xl p-2 font-Monte">Crea tu nota</h3>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} color="secondary" variant="underlined" type="text" label="Titulo" placeholder="Escriba su titulo aqui" size="sm" className="py-2" isClearable isRequired/>
            <Input value={autor} onChange={(e) => setAutor(e.target.value)} color="secondary" variant="underlined" type="text" label="Autor" placeholder="Escriba el autor aqui" size="sm" className="py-2" isClearable isRequired/>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} color="secondary" maxRows={3} variant="underlined" label="Contenido" placeholder="Tu contenido aqui" size="sm" isRequired className="py-2"/>
            <Checkbox value={important} onChange={(e) => setImportant(e.target.checked)} color="secondary" className="p-2" isSelected={important}>Importante</Checkbox>
            <Button onClick={handleSubmit} className="p-2" color="secondary">Subir nota</Button>
        </form>
    </div>
  )
}

export default FormNotaCreate