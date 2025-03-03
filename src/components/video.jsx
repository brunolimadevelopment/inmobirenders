export default function video() {
  return (
    <section className="w-4/5 p-[20px] mx-auto mt-20 bg-[#f5f7fa] flex flex-col items-center opacity-95 transition-all duration-300">
      <h2 className="text-[50px] mb-[20px] font-bold tracking-[2px] leading-10 uppercase text-center text-black">
        Videos mp4
      </h2>

      <div className="bg-[#f1561f] w-[48px] text-center px-0.5 py-0.5 my-10">
        <span className="block mx-auto"></span>
      </div>

      <video
        className="object-cover w-[75%]"
        src="https://inmobirenders.es/wp-content/uploads/2025/01/Mirasoles_1A.mp4"
        controls
        preload="metadata"
        muted
        controlsList="nodownload"
      ></video>
    </section>
  );
}
