import IconPicture from '../components/icons/iconPicture'
import IconHourglass from '../components/icons/iconHourglass'
import Iconbamboo from '../components/icons/iconBamboo'

import Concept from '../components/concept';
import Carousel from '../components/carousel';

export default function AboutSection() {
  return (
    <section className="bg-white mt-20 font-[Reem Kufi] background"  style={{ backgroundImage: "url('src/images/bgConcepts.webp')" }}>
      <div className="container-fluid flex gap-[120px]">
        <div className="flex">

          <div className="bg-gray-500 w-[750px] h-[897px] mx-auto transition-all duration-300 box-border">
            <Carousel client:only="react" />
          </div>

        </div>
        <div className="flex flex-col gap-[80px] justify-center">
          <div className="flex flex-col">
            <h3 className="text-sm text-[#F1561F] font-semibold tracking-[7px] leading-[1.2em] uppercase mb-[20px]">
              Conócenos
            </h3>
            <h2 className="text-black text-[35px] font-bold font-[Reem Kufi] tracking-[2px] leading-[42px] uppercase  w-[280px]">
              Estrategias 360º para tu inmobiliaria
            </h2>
          </div>
          <div className="flex flex-col gap-[30px]">
            <Concept icon={<IconPicture />} title={'Renders Hiperrealistas'} desc={'Realizamos renders hiperrelistas, tanto en diseño, interiorismo como en calidad gráfica.'} />
            <Concept icon={<IconHourglass />} title={'Vídeos y Tour 360º'} desc={'Al haber realizado renders, dispones de un adicional excelente que son los vídeos. Aprovecha nuestros packs, y ten vídeos + tour 360 + imágenes.'} />
            <Concept icon={<Iconbamboo />} title={'Sitio Web para tu promoción'} desc={'La visualización arqutitectónica y de interiorismo para tus promociones es importante. ¡Pero debes tener dónde enseñarlas! Sitios webs adaptados a tu promoción.'} />
          </div>
        </div>
      </div>
    </section>
  );
}
