import CarouselRenders from "../components/carouselRenders";

export default function renders() {
  return (
    <section className="w-full mx-auto my-[80px] bg-white flex flex-col items-center box-border text-sm font-normal leading-5">
      <div className="w-full flex  items-center flex-col mb-1">
        <div className="w-full mb-[20px] mt-4 flex justify-center flex-col mx-auto text-center ">
          <h2 className="text-[15px] text-[#f1561f] p-20 mt-4 font-semibold tracking-[7px] leading-[18px] uppercase">
            ¡LA MEJOR SOLUCIÓN!
          </h2>
          <h3 className="text-black mt-4 text-[35px] font-bold tracking-[2px] leading-[42px] text-center uppercase">
            ¡conoce nuestro pack especial para inmobiliarias!
          </h3>
        </div>
      </div>
      <h3 className="text-black text-[50px] font-bold tracking-[2px] leading-[42px] text-center uppercase mb-10">
        renders
      </h3>
      <div className="bg-[#f1561f] mt-10 w-[48px] text-center px-0.5 py-0.5 mb-10">
        <span className="block mx-auto"></span>
      </div>

      <div className="w-3/4">
        <CarouselRenders client:only="react" />
      </div>
    </section>
  );
}
