import React from "react";

const Services = () => {
  return (
    <section className="w-full mx-auto mt-20 bg-[#f5f7fa] flex flex-col items-center opacity-95 transition-all duration-300">
      <h2 className="text-[35px] p-20px font-bold tracking-[2px] leading-10 text-center text-black">
        NUESTROS SERVICIOS
      </h2>

      <div className="mx-auto mb-10">
        <span className="block text-center w-1.5 h-1 bg-[#f1561f]">
          DIVISOR
        </span>
      </div>

      <section className="flex justify-between w-full flex-row">
        <div className="bg-white mx-5 w-1/3 flex flex-col items-center transition-all duration-300 hover:shadow-md">
          <img src="images/services3.jpg" alt="Image" className="w-full" />
          <div className="p-8">
            <h3 className="text-xl font-bold tracking-wider uppercase text-center text-black mb-5">
              Obras sobre plano
            </h3>
            <p className="text-sm leading-6 text-left text-[#727272]">
              ¿Necesitas vender un inmueble que no está <br />
              construido? Tenemos la solución. Visualiza el <br />
              futuro con nosotros.
            </p>
          </div>
        </div>

        <div className="bg-white mx-5 w-1/3 flex flex-col items-center transition-all duration-300 hover:shadow-md">
          <img src="images/services2.jpg" alt="Image" className="w-full" />
          <div className="p-8">
            <h3 className="text-xl font-bold tracking-wider uppercase text-center text-black mb-5">
              interiores y exteriores
            </h3>
            <p className="text-sm leading-6 text-left text-[#727272]">
              Realizamos tanto interiores como exteriores, no <br />
              tenemos límites a la hora de visualizar lo <br />
              necesario para tu inmobiliaria.
            </p>
          </div>
        </div>

        <div className="bg-white mx-5 w-1/3 flex flex-col items-center transition-all duration-300 hover:shadow-md">
          <img src="images/services1.jpg" alt="Image" className="w-full" />
          <div className="p-8">
            <h3 className="text-xl font-bold tracking-wider uppercase text-center text-black mb-5">
              renderizados de reformas
            </h3>
            <p className="text-sm leading-6 text-left text-[#727272]">
              ¿Tienes un piso o una casa para reformar y <br />
              quieres venderla? Nosotros la renderizamos, y <br />
              enseña el potencial de tu inmueble.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
