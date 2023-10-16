import './../styles/audioplayer.css'
export default function Music({src}) {
  return (
    <>
    <section className="bg-slate-400 container mx-auto h-24">
      <div className="p-6">
        <audio
          src={src}
          autoPlay
          controls
          className="w-full rounded-lg shadow-xl -z-10 audio::-webkit-media-controls-play-button[bg-red-300]"
          loop
        ></audio>
      </div>
    </section>
    </>
  );
}
