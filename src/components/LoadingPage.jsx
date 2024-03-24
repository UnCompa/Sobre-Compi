import Brillo from "./../Imagenes/brillo.jpg";
const LoadingPage = () => {
  return (
    <div className="h-screen bg-zinc-800 grid place-content-center">
        <img className="h-32 w-32 object-cover" src={Brillo}/>
        <h2 className="text-3xl font-Monte text-center">Cargando</h2>
        <span className="text-2xl font-Poppins font-bold text-center">:D</span>
    </div>
  )
}

export default LoadingPage