import Button from "../components/button";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[1000px] flex items-center bg-no-repeat 
      bg-cover bg-center before:absolute 
      before:inset-0 before:bg-black before:opacity-50"
      style={{ backgroundImage: "url('src/images/hero.jpeg')" }}
    >      
      <div className="container relative z-10">
        <h3 className="text-[59px] font-bold text-white uppercase font-[Reem Kufi] text-shadow-custom mb-0 ">
          Global Snopek
        </h3>
        <h2 className="text-[80px] font-bold text-[#F1561F] uppercase font-[Reem Kufi] w-[600px] leading-tight">
          Renders que ilusionan
        </h2>
        <p className="text-[24px] font-[400] font-[Open Sans] text-white flex flex-col">
          Especialistas en renders y vídeos para inmobiliarias,
          <br />promociones y particulares.<br />
          <strong class="mt-4 text-[24px] font-[Open Sans] text-white">Contamos con expertos en vídeo, arquitectos e interioristas.</strong>
        </p>

        <div className="mt-8 flex flex-col">
          <span class="mb-4 tracking-[7px] text-[16px] font-semibold font-[Reem Kufi] uppercase text-white">Powered by global snopek</span>          
          <Button className="w-[272px] h-[56px] bg-[#F1561F] hover:bg-transparent hover:text-white" url="https://api.whatsapp.com/send?phone=34634050913" text="Quiero una cotización"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;