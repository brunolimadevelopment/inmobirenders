import Carousel from "../components/carouselExtCom";

export default function renders() {
  return (
    <section className="w-full mx-auto my-[80px] bg-white flex flex-col items-center box-border text-sm font-normal leading-5">
      <div className="w-full flex  items-center flex-col mb-1">
        <div className="w-full mb-[20px] mt-4 flex justify-center flex-col mx-auto text-center ">
          <h2 className="text-[50px] mb-[10px] font-bold tracking-[2px] leading-16 uppercase text-center text-black">
            ¡HACEMOS TAMBIÉN renders comerciales!
          </h2>
        </div>
      </div>

      <div className="bg-[#f1561f] mt-5 w-[48px] text-center px-0.5 py-0.5 mb-10">
        <span className="block mx-auto"></span>
      </div>

      <div className="w-3/4">
        <Carousel client:only="react" />
      </div>
    </section>
  );
}
