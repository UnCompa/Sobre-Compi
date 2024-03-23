/* eslint-disable react/prop-types */
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function Music({ src }) {
  return (
    <>
        <AudioPlayer
          autoPlay
          src={src}
          loop
          volume={.5}
          hasDefaultKeyBindings
        />
    </>
  );
}
