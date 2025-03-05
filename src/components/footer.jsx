const Footer = () => {
    return (
      <>
        <footer className="w-full pt-[80px] pb-[80px]">
          <div className="container flex justify-between">
            <div className="col">
              <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Nuestra ubicación</h3>
              <ul className="mt-[60px]">
                <li className="pb-[8px]">
                  <a href="#" className="font-[Montserrat] font-normal normal-case leading-[22px]"><i className="fas fa-map-marker-alt"></i>Madrid, España</a>
                </li>
                <li  className="pb-[8px]">
                  <a href="https://api.whatsapp.com/send?phone=34634050913" className="font-[Montserrat] font-normal normal-case leading-[22px]" title="Whatsapp" target="_blank"><i className="fa fa-maps"></i>634050913</a>
                </li>
                <li  className="pb-[8px]">
                  <a href="tel:+34911090687" className="font-[Montserrat] font-normal normal-case leading-[22px]" title="" target="_blank"><i className="fa fa-phone"></i>911090687</a>
                </li>
                <li  className="pb-[8px]">
                  <a href="mailto:info@inmobirenders.es" className="font-[Montserrat] font-normal normal-case leading-[22px]" title="info@inmobirenders.es"><i className="fa fa-mail"></i>info@inmobirenders.es</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Redes Sociales</h3>
              <ul className="mt-[60px]">
                <li  className="pb-[8px]">
                  <a href="https://www.instagram.com/inmobi.renders" className="font-[Montserrat] font-normal normal-case leading-[22px]" title="@inmobi.renders" target="_blank"><i className="fa fa-instagram"></i>inmobi.renders</a>
                </li>
                <li  className="pb-[8px]">
                  <a href="https://www.facebook.com/people/Inmobirenderses/61553190219066/" className="font-[Montserrat] font-normal normal-case leading-[22px]" title="Facebook" target="_blank"><i className="fa fa-maps"></i>Inmobirenders.es</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">servicios</h3>
              <ul className="mt-[60px]">
                <li className="pb-[8px]">
                  <span className="font-[Montserrat] font-normal normal-case leading-[22px]"><i className="fa fa-instagram"></i>Renders Inmobiliarias</span>
                </li>
                <li className="pb-[8px]">
                  <span className="font-[Montserrat] font-normal normal-case leading-[22px]"><i className="fa fa-maps"></i>Renders exteriores</span>
                </li>
                <li className="pb-[8px]">
                  <span className="font-[Montserrat] font-normal normal-case leading-[22px]"><i className="fa fa-maps"></i>Recorridos virtuales</span>
                </li>
                <li className="pb-[8px]">
                  <span className="font-[Montserrat] font-normal normal-case leading-[22px]"><i className="fa fa-maps"></i>Decoración de interiores</span>
                </li>
                <li className="pb-[8px]">
                  <span className="font-[Montserrat] font-normal normal-case leading-[22px]"><i className="fa fa-maps"></i>vídeos promocionales</span>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3 className="text-[19px] font-[Raleway] tracking-[1.5px] uppercase text-[#F1561F] font-bold">Recorridos virtuales</h3>
              <ul className="mt-[60px]">
                <li className="pb-[8px]">
                  <a href="#" className="font-[Reem Kufi] text-[20px] font-bold tracking-[1.5px] text-[#888888]"><i className="fa fa-instagram"></i>Visita nuestro portfolio</a>
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
        <div className="flex bg-[#F0F0F0] pt-[10px] pb-[10px]">
          <div className="container flex gap-[90px] items-center justify-center">
            <em className="text-[15px] font-normal"><strong>Copyright © 2025</strong></em>
            <ul className="flex gap-[80px]">
              <li><a href="#" className="font-[Reem Kufi] tracking-[1.5] font-bold text-[20px] pt-[10px] pb-[10px]">Políticas de privacidad</a></li>
              <li><a href="#" className="font-[Reem Kufi] tracking-[1.5] font-bold text-[20px] pt-[10px] pb-[10px]">Políticas de cookies</a></li>
              <li><a href="#" className="font-[Reem Kufi] tracking-[1.5] font-bold text-[20px] pt-[10px] pb-[10px]">Aviso Legal</a></li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;