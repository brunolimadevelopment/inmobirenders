export default function Tour() {
  return (
    <section className="w-4/5 p-[20px] mx-auto mt-20 bg-[#f5f7fa] flex flex-col items-center opacity-95 transition-all duration-300">
      <h2 className="text-[50px] mb-[20px] font-bold tracking-[2px] leading-16 uppercase text-center text-black">
        Tour virtual interactivo
      </h2>

      <div className="bg-[#f1561f] w-[48px] text-center px-0.5 py-0.5 my-10">
        <span className="block mx-auto"></span>
      </div>

      <iframe
        className="w-[80%] h-[650px]"
        src="https://kuula.co/share/collection/7Xwvm?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=2&inst=es"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowFullScreen
      ></iframe>
    </section>
  );
}
