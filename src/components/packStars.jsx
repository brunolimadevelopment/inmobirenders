import Button from "../components/button";

export default function packStars() {
  return (
    <section className="w-full mt-[60px] mb-[60px]">
        <div className="container-fluid flex">
            <div className="w-[35%] p-[64px] flex gap-[40px] flex-col">
                <div className="flex">
                    <i aria-hidden="true" class="jki jki-star-line"></i>
                    <h3 className="text-[35px] leading-tight uppercase font-bold font-[Reem Kufi] tracking-wider">Pack Estrella</h3>

                </div>
                <ul>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Vídeo exterior. 2 rondas de modificaciones.</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Renders fijos x15</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Tour virtual 360º hasta 8 estancias interior</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Mínimo 2 renders por estancia</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Vídeo MP4 60 segundos interior</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Opcional sitio web one-page 550€ + IVA adicionales</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Preguntar recorridos exteriores o vístas aéreas</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">1 ronda de modificaciones</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Dirigido por arquitectos y decoradoras</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Mobiliario estándar, moderno, minimalista y colores neutros. Si deseas modelado específico, pregunta.</span>
                    </li>
                    <li className="mb-[10px] pb-[10px] border-b-[1px] border-[#F1561F]">
                        <i></i>
                        <span className="text-[16px] font-sans font-normal leading-[1.5] font-[apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]">Precios válidos por pack completo</span>
                    </li>
                </ul>
                <Button className="w-[155px] h-[56px] bg-[#F1561F] hover:bg-transparent hover:text-black" url="https://api.whatsapp.com/send?phone=34634050913" text="Consultar"/>

            </div>
            <div className="w-[65%] h-[931px] flex justify-center items-center bg-black">
                <video
                    className="h-[931px] w-full object-cover"
                    src="src/videos/VIDEO_ATICO.mp4"
                    autoPlay
                    controls
                    playsInline
                />
            </div>

        </div>
    </section>
  )
}
