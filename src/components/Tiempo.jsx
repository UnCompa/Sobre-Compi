import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
dayjs.extend(relativeTime, duration);
export default function Tiempo() {
  let date = dayjs(new Date("2023-05-15")).format('DD/MM/YYYY');
  let month = dayjs(new Date("2023-05-15")).from();
  let day = dayjs(new Date("2023-05-15")).date();
  let hour = dayjs(new Date("2023-05-15")).hour();
  let minute = dayjs().minute();
  let second = dayjs().second();
  return (
    <>
      <div className="lg:flex">
        <div className="h-24 w-1/2 mx-auto lg:w-full bg-slate-900 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center">
          {month.slice(0, 1)}
          <div className="text-white text-xl">Meses</div>
        </div>
        <span className="text-white text-2xl">:</span>
        <div className="h-24 w-1/2 mx-auto lg:w-full bg-slate-900 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center">
          {day}
          <div className="text-white text-xl">Dias</div>
        </div>
        <span className="text-white text-2xl">:</span>
        <div className="h-24 w-1/2 mx-auto lg:w-full bg-slate-900 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center">
          {hour}
          <div className="text-white text-xl">Horas</div>
        </div>
        <span className="text-white text-2xl">:</span>
        <div className="h-24 w-1/2 mx-auto lg:w-full bg-slate-900 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center">
          {minute}
          <div className="text-white text-xl">Minutos</div>
        </div>
        <span className="text-white text-2xl">:</span>
        <div className="h-24 w-1/2 mx-auto lg:w-full bg-slate-900 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center">
          {second}
          <div className="text-white text-xl">Segundos</div>
        </div>
      </div>
      <div className="text-center py-2 italic text-slate-900">Empezo el: {date}</div>
    </>
  );
}