import './../styles/audioplayer.css'
export default function Music({src}) {
  return (
    <>
    <section className="bg-slate-400 container mx-auto h-24 relative -z-10">
      <div className="p-6 -z-20">
        <audio
          src={src}
          autoPlay
          controls
          className="w-full rounded-lg shadow-xl -z-10"
          loop
        ></audio>
      </div>
    </section>
    </>
  );
}
