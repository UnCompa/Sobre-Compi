import { useEffect } from "react";
import useSound from "use-sound";
import Musica from "./../sound/Music.mp3";

export default function Sound({ counter }) {
  const [play] = useSound(Musica, { interrupt: true });

  useEffect(() => {
    play();
  }, [counter, play]);
  return null;
}