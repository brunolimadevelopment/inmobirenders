import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDraftingCompass,
  faClock,
  faVideo,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section
      className="relative w-full mt-20
            flex flex-col items-center justify-between text-white 
            bg-no-repeat 
            bg-cover bg-center before:absolute 
            before:inset-0 before:bg-black before:opacity-50 h-full 
            transition-all duration-300 leading-[21px]"
      style={{ backgroundImage: "url('src/images/about.png')" }}
    >
      <h3 className="mt-[5%] relative text-[16px] text-white uppercase text-base font-semibold tracking-[7px] leading-[19.2px] mb-3">
        visualiza tus promociones
      </h3>
      <h2 className="text-[35px] relative text-white font-bold uppercase leading-[42px] tracking-[2px] mb-4">
        expertos en el sector inmobiliario
      </h2>

      <div className="flex flex-row relative text-white my-10 mx-40 w-4/5">
        <div className="border border-white relative p-12 w-1/2 mx-8 transition-all duration-75 hover:border-[#f1561f] hover:bg-black hover:bg-opacity-80">
          <FontAwesomeIcon
            icon={faDraftingCompass}
            className="block text-[#f1561f] mb-[20px] text-[50px] font-black h-12 w-12 "
          />
          <h4 className="text-[20px] tracking-wider mb-[20px] font-bold uppercase">
            eQUIPO DE INTERIORISTAS Y ARQUITECTOS
          </h4>
          <p className="text-[15px] font-normal leading-[22.5px] mb-3 font-['Open_Sans']">
            En toda pieza gráfica, aparte del nivel de realismo, es muy <br />
            importante la composición de la escena. ¡Déjate guiar por <br />
            nuestros arquitectos e interioristas!
          </p>
        </div>

        <div className="border relative border-[#f1561f] p-12 w-1/2 mx-8 transition-all duration-75 hover:border-[#f1561f] hover:bg-black hover:bg-opacity-80">
          <FontAwesomeIcon
            icon={faClock}
            className="block text-[#f1561f] text-5xl mb-[20px] font-black h-12 w-12"
          />
          <h4 className="text-[20px] tracking-wider mb-[20px] font-bold uppercase">
            TRABAJOS URGENTES
          </h4>
          <p className="text-[15px] font-normal leading-[22.5px] mb-3 font-['Open_Sans']">
            ¿Tienes apuros por lanzar la promoción? ¿Tu cliente quiere <br />
            todo urgente? Estamos preparados. Podemos asignar varias <br />{" "}
            personas a un mismo proyecto y renderizar en 24 o 48hs. <br />
            Realiza la consulta y evaluamos tu situación.
          </p>
        </div>
      </div>

      <div className="flex flex-row relative text-white my-10 mx-40 w-4/5">
        <div className="border border-white p-12 w-1/2 mx-8 transition-all duration-75 hover:border-[#f1561f] hover:bg-black hover:bg-opacity-80">
          <FontAwesomeIcon
            icon={faVideo}
            className="block text-[#f1561f] text-5xl mb-[20px] font-black h-12 w-12"
          />
          <h4 className="text-[20px] tracking-wider mb-[20px] font-bold uppercase">
            VÍDEOS E IMÁGENES
          </h4>
          <p className="text-[15px] font-normal leading-[22.5px] mb-3 font-['Open_Sans']">
            Una imagen dice más que mil palabras, y un vídeo es una <br />
            herramienta fundamental para la comercialización ¡Solicita <br /> tu
            cotización!
          </p>
        </div>

        <div className="border border-white p-12 w-1/2 mx-8 transition-all duration-75 hover:border-[#f1561f] hover:bg-black hover:bg-opacity-80">
          <FontAwesomeIcon
            icon={faEuroSign}
            className="block text-[#f1561f] text-5xl mb-[20px] font-black h-12 w-12"
          />
          <h4 className="text-[20px] tracking-wider mb-[20px] font-bold uppercase">
            ¡EXCELENTES PRECIOS POR PACK!
          </h4>
          <p className="text-[15px] font-normal leading-[22.5px] mb-3 font-['Open_Sans']">
            Dependiendo el tamaño de la promoción o encargo de <br /> venta,
            tenemos diferentes opciones. Nuestros asesores y <br /> arquitectos
            te harán una sugerencia de visualización.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
