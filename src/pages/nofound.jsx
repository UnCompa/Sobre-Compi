export default function NoFound() {
    const link = location.href
    return (
    <div className='h-screen bg-slate-300 grid place-content-center'>
        <h1 className='text-8xl text-slate-500 font-Monte text-center my-4'>404</h1>
        <h2 className='text-3xl font-Monte text-center'>Ruta desconocida</h2>        
        <p className='text-center m-4 font-Poppins'><b>No se encontro: </b> <br />{link}</p>
    </div>
  )
}
