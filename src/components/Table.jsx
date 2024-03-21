import Ventana from "./../Imagenes/ventana.jpg";
import Basquet from './../Imagenes/basquet.jpg'
import Dibujo from './../Imagenes/dibujando.jpg'
import Playa from './../Imagenes/playa.jpg'
import Peluche from './../Imagenes/peluche.jpg'
import Sola from './../Imagenes/solitaria.jpg'
import Tiempo from './../Imagenes/tiempo.jpg'
import Debilidad from './../Imagenes/debilidad.jpg'
import Defectos from './../Imagenes/defectos.jpg'
import Corazon from './../Imagenes/corazon.jpg'
import Salud from './../Imagenes/salud.jpg'
import Amigos from './../Imagenes/amigos.jpg'
import Card from './../components/Card2'
import Card2 from './../Imagenes/notas.jpg'
export default function Table() {
  return (
    <article className="grid grid-1 md:grid-cols-2 gap-4 py-4 container mx-auto h-full">
        <Card
          img={Ventana}
          color="bg-green-400"
          title="Cualidades"
          text={`Ella es una persona alocada, que vive el momento aunque es distraída no le quita su sonrisa, también es torpe cuando se trata de entender temas, aunque hace su mayor esfuerzo para ser la mejor.
- Algo que la caracteriza es su tolerancia y empatia que siente hacia los demás, siendo puntual en tareas que la encomiendan.
Hay cosas que hace cuando esta mal, una de ellas es escuchar música en su cuarto, se serena en casos necesario, pero cuando ya no puede se altera y grita eso para poder disipar todo lo malo que siente. `}
        />

        <Card
          img={Basquet}
          color="bg-rose-400"
          title="Pasiones"
          text="
          - Como antes ella ama jugar basquet, hacer dibujos hermosos, y escuchar su musica favorita para levantar su ánimo. Y como fan de las Literatura, ama leer libros y relatar poesía. Tambien siendo fan de los animales en especial los gatos que llevan un espacio en su corazón.
          - Mientras esta desocupada ella duerme, también ve videos acerca de lo que le gusta como el basquet, dibujar y el anime.
          - Aunque su mejor lugar es ella misma pasando sola. Disfrutando de cualquier actividad como escuchar y pasar en la lluvia como ver el cielo estrellado."
        />
        <Card
          img={Dibujo}
          color="bg-cyan-400"
          title="Habilidades"
          text="- Es una muy buena cocinera, asi mismo es en el deporte que le gusta practicar el basquet.
          - Ademas se destaca en otras área como el arte, creando hermosos dibujos. Aunque en musica no es buena lo ha probado alguna vez."
        />
        <Card
          img={Playa}
          color="bg-blue-300"
          title="Experiencias"
          text="- Su mejor experiencia fue ir a la playa mientras visitaba a su familia, compartiendo momentos bonitos entre ellos. Tambien alguien importante en su vida es su hermano el cual la apoyo desde muy pequeña. Aunque a la vez lo mas triste ya que se fue de su lado formando su propia familia."
        />
        <Card
          img={Peluche}
          color="bg-green-500"
          title="Bienes ♥"
          text="Lo mas importante para ella es su balon de basquet, con ella se relaja jugando a su deporte favorito el basquet, se unen también los peluches ya que son una gran compañía cuando ella esta sola.
          Además lo que mas anhela es su propia cancha de basquet para jugar y practicar cuando ella desee, aunque se incluye también unas pinturas para sus dibujos, y audífonos con los cual escuchar la música que mas ama. 
          Ella no es nada materialista aunque si es especial lo acepta con gusto. Ademas de que le gusta cosas como la Fisica, Artes, Historia, Literatura y Leer. Con ganas de practicar mas idiomas."
        />
        <Card
          img={Corazon}
          color="bg-purple-400"
          title="Sentimental ♦"
          text="En lo sentimental ella es una persona muy feliz con lo que hace, aunque en algunos momentos ella siente angustia por lo que la rodea, haciendo que se altere en esos momentos. Lo que hace es calmarse y dormir para disipar esos malos momentos. 
          Ha pesar de ser alegre, se enoja con cierta facilidad, lo que provoca que no hable mucho y se desconcentra en lo que hace. Ademas considera ampliar su circulo social haciendo mas amigos, y mejorar sus relaciones con su familia."
        />
        <Card
          img={Tiempo}
          color="bg-gray-300"
          title="Tiempo ♣"
          text="Su vida es algo caótica pero la con ayuda de sus personas de confianza puede conseguir lo que ella necesite, aunque si no hay alguien que la apoye termina haciéndolo por ella misma. Se considera como alguien solitaria anhelando ser la mejor en sus estudios. 
          Ademas dedica una parte de su tiempo a cuidar a sus dos sobrinos, aunque no tiene planeado mejorar como maneja su tiempo."
        />
        <Card
          img={Debilidad}
          color="bg-yellow-200"
          title="Debilidades ♠"
          text="Lo que mas le asusta son las cucarachas, ademas no le gusta cuando le gritan ya que se altera y ocasionar que llore :c, también cuando llueve no le gusta las tormentas que pasa a su alrededor y mas por los truenos que hacen que se altere. Y su anécdota mas escalofriante es cuando paso un tiempo con su abuelito, donde presenciaba que alguien lo seguia, y cuando esta muy mal se aleja y no quiere saber de nadie."
        />
        <Card
          img={Defectos}
          color="bg-rose-500"
          title="Defectos •"
          text="A pesar de que esta entre un 50/50 con su cuerpo siente que no tiene el fisico que ella desea, también incluye su distracción que hace que se moleste cuando le pasa algo, sintiendo una gran frustración, ocasionado que no quiera saber de nada y de nadie.
          Y no le gusta sentirse frustrada, triste, enojada, además de evitar enamorarse de momento, incluyendo su ansiedad."
        />
        <Card
          img={Salud}
          color="bg-slate-300"
          title="Salud ♥"
          text="Cuida su salud no comiendo comida chatarra, alimentándose de buena manera. Aunque por dentro siente una gran negligencia, alejándose se otras personas cuando se siente mal, su consuelo es escuchar su playlist favorita."
        />
        <Card
          img={Sola}
          color="bg-orange-500"
          title="Relaciones ♂"
          text="Para ella una relacion se basa en lo mas importante La confianza, ademas de que sean honestos con ella, contando sus experiencias a ella y que sean atentos con lo que hace y dice."
        />
        <Card
          img={Amigos}
          color="bg-cyan-200"
          title="Mi opinión ♪"
          text="Para mi ella es una chica excelente en muchas cosas, como el deporte el arte, su voz es algo que ,e encanta, además de sus ojos, su personalidad es honesta y linda. Una chica buena en todos los sentidos, la mejor amiga que tengo y tendre ♥"
        />
      </article>
  )
}
