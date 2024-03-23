/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormUpdate = ({ id, imageDetails }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newImage = {
      title: title || imageDetails.title,
      description: description || imageDetails.description,
      url: imageDetails.url,
    };
    const api = `https://compis.onrender.com/api/images/${id}`;
    const response = await fetch(api, {
      method: "PUT",
      body: JSON.stringify(newImage),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataResponse = await response.json();
    console.log(dataResponse);
    navigate("/recuerdos")
  };
  return (
    <div className=" bg-slate-50 container mx-auto border-2 border-pastel-4 my-4 p-4 shadow-lg">
      <h2 className="font-Monte text-2xl">Actualizar recuerdo</h2>
      <form
        action=""
        className="flex flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="font-Poppins py-1" htmlFor="">
          Titulo:
        </label>
        <input
          required
          onChange={(e) => setTitle(e.target.value)}
          className="ring ring-pastel-4 px-1 font-Poppins focus:ring focus:ring-pastel-1"
          type="text"
          name=""
          id=""
        />
        <label className="font-Poppins py-1" htmlFor="">
          Descripcion:
        </label>
        <input
          required
          onChange={(e) => setDescription(e.target.value)}
          className="ring ring-pastel-4 px-1 font-Poppins focus:ring focus:ring-pastel-1"
          type="text"
          name=""
          id=""
        />
        <label className="font-Poppins py-1" htmlFor="">
          Imagen:
        </label>
        <div>
        </div>
        <button className="bg-pastel-1 my-2 px-4 py-2 rounded-md text-white font-Monte">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default FormUpdate;
