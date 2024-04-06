import Card from './../components/Card2'
import Informacion from './../pages/info.json'
export default function Table() {
  return (
    <article className="bg-zinc-800 grid grid-1 md:grid-cols-2 gap-4 p-4 container mx-auto h-full text-white">
        {
          Informacion.map((info) => {
            const imgPath = info.img
            console.log(imgPath);
            return (
              <Card
                key={info.title}
                img={imgPath}
                color={info.color}
                title={info.title}
                text={info.text}
              />
            )
          })
        }
      </article>
  )
}
