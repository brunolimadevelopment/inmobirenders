const Footer = () => {
    return (
      <footer className="w-full">
        <div className="container flex justify-between">
          <div className="col">
            <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Nuestra ubicación</h3>
            <ul className="mt-[60px]">
              <li className="pb-[8px]">
                <a href="#" className="font-[Montserrat] font-normal normal-case leading-[22px] "><i className="fa fa-maps"></i>Madrid, España</a>
              </li>
              <li  className="pb-[8px]">
                <a href="https://api.whatsapp.com/send?phone=34634050913" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>634050913</a>
              </li>
              <li  className="pb-[8px]">
                <a href="tel:+34911090687" title="" target="_blank"><i className="fa fa-phone"></i>911090687</a>
              </li>
              <li  className="pb-[8px]">
                <a href="mailto:info@inmobirenders.es" title="info@inmobirenders.es"><i className="fa fa-mail"></i>info@inmobirenders.es</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Redes Sociales</h3>
            <ul className="mt-[60px]">
              <li  className="pb-[8px]">
                <a href="#"><i className="fa fa-instagram"></i>inmobi.renders</a>
              </li>
              <li  className="pb-[8px]">
                <a href="#" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>Inmobirenders.es</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">servicios</h3>
            <ul className="mt-[60px]">
              <li className="pb-[8px]">
                <a href="#"><i className="fa fa-instagram"></i>Renders Inmobiliarias</a>
              </li>
              <li className="pb-[8px]">
                <a href="#" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>Renders exteriores</a>
              </li>
              <li className="pb-[8px]">
                <a href="#" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>Recorridos virtuales</a>
              </li>
              <li className="pb-[8px]">
                <a href="#" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>Decoración de interiores</a>
              </li>
              <li className="pb-[8px]">
                <a href="#" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>vídeos promocionales</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Recorridos virtuales</h3>
            <ul className="mt-[60px]">
              <li className="pb-[8px]">
                <a href="#"><i className="fa fa-instagram"></i>Visita nuestro portfolio</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Últimos renders</h3>
            <ul className="mt-[60px]">
              <li className="pb-[8px]">
                <a href="#">
                  <img src="" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;