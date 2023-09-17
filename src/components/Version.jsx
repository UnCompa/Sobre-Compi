export default function Entradas({ nota }) {
    return (
      <section className="bg-pastel-3 m-4 p-4 h-1/1 shadow-xl">
        <h2 className="text-2xl font-Monte">Version: {nota.id}</h2>
        <div className="bg-pastel-2 p-1 my-4 shadow-lg">
          <div className="flex justify-between m-1 bg-pastel-3 p-2">
            <h3>
              <b>Titulo: </b>
              {nota.title}
            </h3>
            <p>
              <b>Fecha: </b>
              {nota.date}
            </p>
          </div>
          <div className="bg-pastel-3 p-2 my-2 mx-1">{nota.info}</div>
        </div>
      </section>
    );
  }
  