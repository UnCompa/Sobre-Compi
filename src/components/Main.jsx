export default function Main() {
  return (
    <main className="grid-rows-2 md:flex justify-center">
      <div className="my-2 w-full bg-pastel-4 h-full md:h-72">
        <h2 className="text-xl p-3 font-Monte font-bold">¿De que tratara la página?</h2>
        <p className="p-3 font-Poppins">Esta pagina contendra recuerdo, momento, y notas sobre mi amigo</p>
        <p className="p-3 font-Poppins">La pagina esta en proceso, ademas escalara hasta el cumpleaños de <b>La compi</b> asi que nada mas :D</p>
      </div>
      <div className="my-2 w-72h-full md:h-72">
        <div className="h-full w-full flex justify-center">
            <img src='https://i1.sndcdn.com/avatars-2ZbOWmZnWzTYlk0v-nKi6Eg-t240x240.jpg' alt="Tu" className="object-cover h-full w-full"/>
        </div>
      </div>
    </main>
  );
}
