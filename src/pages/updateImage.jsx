import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import FormUpdate from "../components/FormUpdate";

function UpdateImage() {
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
  if (!imageDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header color={"bg-sky-500"} title={"Actualizar"} />
      <main className="container mx-auto p-4 font-Poppins">
        <section className="grid grid-cols-2">
          <div>
            <h2 className="text-center text-2xl font-bold">
              {imageDetails.title}
            </h2>
            <p className="text-lg py-2 text-center">
              Descripción: {imageDetails.description}
            </p>
            <button
              onClick={handleClick}
              className="w-full bg-purple-400 my-2 py-1 text-white rounded"
            >
              Volver
            </button>
          </div>
          <div className="bg-zinc-50 p-4 grid place-content-center">
            <img
              className="aspect-square h-[12rem] w-full object-cover"
              src={imageDetails.url}
            />
          </div>
        </section>
        <section>
          <FormUpdate id={id} imageDetails={imageDetails} />
        </section>
      </main>
    </>
  );
}

export default UpdateImage;
