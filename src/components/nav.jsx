import Button from "../components/button";
import "../styles/global.css";

const Nav = () => {
  return (
    <nav className="flex items-center w-[78%]">
      <ul className="flex gap-[82px] w-[82%]">
        <li>
          <a href="#nosotros" title="Nosotros" className="no-underline tracking-wider text-white font-[Reem Kufi] font-medium uppercase  text-sm transition-all duration-400 hover:text-amber-600 ">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#servicios" title="Servicios" className="no-underline tracking-wider text-white font-[Reem Kufi] font-medium uppercase  text-sm transition-all duration-400 hover:text-amber-600 ">
            Servicios
          </a>
        </li>
        <li>
          <a href="#trabajos" title="Últimos Trabajos" className="no-underline tracking-wider text-white font-[Reem Kufi] font-medium uppercase  text-sm transition-all duration-400 hover:text-amber-600 ">
            Últimos Trabajos
          </a>
        </li>
        <li>
          <a href="#estrella" title="¡Pack estrella!" className="no-underline tracking-wider text-white font-[Reem Kufi] font-medium uppercase  text-sm transition-all duration-400 hover:text-amber-600 ">
            ¡Pack estrella!
          </a>
        </li>
        <li>
          <a href="#contacto" title="Contacto" className="no-underline tracking-wider text-white font-[Reem Kufi] font-medium uppercase  text-sm transition-all duration-400 hover:text-amber-600 ">
            Contacto
          </a>
        </li>
      </ul>
      <Button className="w-[179px] h-[56px] bg-[#F1561F] hover:bg-white" text="Contáctanos" url="https://api.whatsapp.com/send?phone=34634050913"/>
    </nav>
  );
};
  
export default Nav;