/* eslint-disable react/prop-types */
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
export default function Music({ src }) {
  return (
    <>
      <section className="bg-slate-400 p-2 container mx-auto h-24 relative -z-10">
        <AudioPlayer
          autoPlay
          src={src}
          className="h-full"
          loop
          volume={.5}
          showSkipControls={false}
          showJumpControls={false}
          controls
        />
      </section>
    </>
  );
}
