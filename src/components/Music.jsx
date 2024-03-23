/* eslint-disable react/prop-types */
import AudioPlayer from "react-h5-audio-player";
import Music1 from './../sound/Music.mp3';
import Music2 from './../sound/Esta canción es hermosamente triste (.mp3';
import Music3 from './../sound/esta música electrónica es muy adictiva.mp3';
import Music4 from './../sound/la canción más kawai del mundo.mp3';
import Music5 from './../sound/snowfall.mp3';
import "react-h5-audio-player/lib/styles.css";

const musics = [Music1, Music2,Music3,Music4,Music5];
const randomIndex = Math.floor(Math.random() * musics.length);
const musicSrc = musics[randomIndex];

export default function Music() {
  return (
    <>
        <AudioPlayer
          autoPlay
          src={musicSrc}
          loop
          volume={0.1}
          hasDefaultKeyBindings
        />
    </>
  );
}
