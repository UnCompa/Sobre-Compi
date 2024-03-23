import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useEffect, useState } from "react";

dayjs.extend(duration, localizedFormat);

export default function Time() {
  const initialDate = dayjs("2023-06-15T05:39:00");
  const [elapsedTime, setElapsedTime] = useState(dayjs.duration(dayjs().diff(initialDate)));
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const diff = dayjs.duration(dayjs().diff(initialDate));
      setElapsedTime(diff);
    }, 1000); // Actualizar cada segundo
    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId)
    }
  }, [initialDate]);

  return (
    <>
      <div className="grid grid-cols-1 place-items-center lg:grid lg:grid-cols-6 lg:place-items-center">
        <div className="h-24 w-2/3 lg:w-36 bg-zinc-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
          {elapsedTime.years()}
          <div className="text-white text-xl">Años</div>
        </div>
        <div className="h-24 w-2/3 lg:w-36 bg-zinc-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
          {elapsedTime.months()}
          <div className="text-white text-xl">Meses</div>
        </div>
        <div className="h-24 w-2/3 lg:w-36 bg-zinc-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
          {elapsedTime.days()}
          <div className="text-white text-xl">Días</div>
        </div>
        <div className="h-24 w-2/3 lg:w-36 bg-zinc-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
          {elapsedTime.hours()}
          <div className="text-white text-xl">Horas</div>
        </div>
        <div className="h-24 w-2/3 lg:w-36 bg-zinc-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
          {elapsedTime.minutes()}
          <div className="text-white text-xl">Minutos</div>
        </div>
        <div className="h-24 w-2/3 lg:w-36 bg-zinc-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
          {elapsedTime.seconds()}
          <div className="text-white text-xl">Segundos</div>
        </div>
      </div>
      <div className="text-center font-Monte py-2 italic text-slate-600 font-light">
        Empezó el: {initialDate.format("DD/MM/YYYY HH:mm:ss")}
      </div>
    </>
  );
}
