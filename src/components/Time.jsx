import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { useEffect, useState } from 'react';
dayjs.extend(duration,localizedFormat)
export default function Time() {
    let date = dayjs("2023-05-15T05:39:00").format('DD/MM/YYYY' + ' ' +'HH:mm:ss');
    const [year, setyear] = useState(0)
    const [month, setmonth] = useState(0)
    const [days, setdays] = useState(0)
    const [hour, sethour] = useState(0)
    const [minutes, setminutes] = useState(0)
    const [second, setsecond] = useState(0)

useEffect(()=>{
      const date1 = dayjs('2023-06-15T05:39:00');
      const date2 = dayjs();
      const diff = dayjs.duration(date2.diff(date1))
    setyear(diff.years())
    setmonth(diff.months())
    setdays(diff.days())
    sethour(diff.hours())
    setminutes(diff.minutes())
    setsecond(diff.seconds())
    console.log("Hola");
  },[second,minutes])
  return <>
  <div className="grid grid-cols-1 place-items-center lg:grid lg:grid-cols-6 lg:place-items-center">
    <div className="h-24 w-2/3 lg:w-36 bg-slate-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
      {year}
      <div className="text-white text-xl">Años</div>
    </div>
    <div className="h-24 w-2/3 lg:w-36 bg-slate-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
      {month}
      <div className="text-white text-xl">Meses</div>
    </div>
    <div className="h-24 w-2/3 lg:w-36 bg-slate-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
      {days}
      <div className="text-white text-xl">Dias</div>
    </div>
    <div className="h-24 w-2/3 lg:w-36 bg-slate-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
      {hour}
      <div className="text-white text-xl">Horas</div>
    </div>
    <div className="h-24 w-2/3 lg:w-36 bg-slate-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
      {minutes}
      <div className="text-white text-xl">Minutos</div>
    </div>
    <div className="h-24 w-2/3 lg:w-36 bg-slate-600 px-6 py-4 mt-4 mb-2 text-white text-3xl font-Monte text-center font-medium border-white border-b-4 shadow-lg">
      {second}
      <div className="text-white text-xl">Segundos</div>
    </div>
  </div>
  <div className="text-center font-Monte py-2 italic text-slate-600 font-light">Empezo el: {date}</div>
</>;
}
