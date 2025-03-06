import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function callToAction() {
  return (
    <section className="flex flex-col text-center w-full py-20 mt-20 bg-gradient-to-b from-[#F1561F] to-[#BE3200]">
      <h2 className="mt-4 text-[35px] text-white font-bold tracking-[2px] -mb-5 leading-[42px] text-center uppercase">
        ¿quieres un pack con menos imágenes o sin vídeo?
      </h2>
      <h3 className="text-[16px] text-[#fff] p-20 -mt-5 font-semibold tracking-[7px] leading-[18px] uppercase">
        ¡pregunta!
      </h3>
      <a
        href="https://api.whatsapp.com/send?phone=34634050913"
        target="_blank"
        className="w-auto text-[14px] text-[#fff] px-[30px] py-5 text-center font-medium tracking-[1px] leading-[14px] mx-auto uppercase block transition-all border border-transparent hover:border-white hover:bg-transparent -mt-10 bg-[#25d366]"
      >
        <span className="text-center mx-auto">Enviar Whatsapp</span>
      </a>
    </section>
  );
}
