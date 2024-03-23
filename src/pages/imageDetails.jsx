import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function ImageDetails() {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://compis.onrender.com/api/images/${id}`
        );
        const data = await response.json();
        setImageDetails(data);
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchData();
  }, [id]);
  const handleClick = () => {
    navigate("/recuerdos");
  };
  const handleDelete = async () => {
    const deleteUrl = `https://api.cloudinary.com/v1_1/dgiq2rzid/image/destroy/${imageDetails.publicId}`;
    const deleteResponse = await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        Authorization: "684372144425156", // Reemplaza 'TU_API_KEY' con tu API Key de Cloudinary
      },
    });
    const deleteData = await deleteResponse.json();
    console.log(deleteData);
    const api = `https://compis.onrender.com/api/images/${id}`;
    fetch(api, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/recuerdos`);
      });
  };
  const handleUpdate = () => {
    navigate(`/recuerdos/update/${imageDetails.id}`);
  };
  if (!imageDetails) {
    return (
      <>
        <Header color={"bg-zinc-500"} title={"Detalles"} />
        <div className="container mx-auto">
          <h2 className="text-xl font-bold text-center">Cargando...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header color={"border-yellow-500"} title={"Detalles"} />
      <main className="container mx-auto p-4 font-Poppins text-white">
        <h2 className="text-center text-2xl font-bold">{imageDetails.title}</h2>
        <p className="text-lg py-2 text-center">
          Descripción: {imageDetails.description}
        </p>
        <button
          onClick={handleClick}
          className="w-full bg-purple-400 my-2 py-1 text-white rounded"
        >
          Volver
        </button>
        <div>
          <button
            onClick={handleDelete}
            className="bg-red-500 w-full my-2 py-1 rounded-md text-white font-bold"
          >
            Borrar
          </button>
        </div>
        <div>
          <button
            onClick={handleUpdate}
            className="bg-green-500 w-full my-2 py-1 rounded-md text-white font-bold"
          >
            Actualizar
          </button>
        </div>
        <div className="bg-zinc-800 p-4 grid place-content-center">
          <img
            className="border-2 border-white aspect-auto h-[30rem] w-full object-cover"
            src={imageDetails.url}
          />
        </div>
      </main>
    </>
  );
}

export default ImageDetails;
