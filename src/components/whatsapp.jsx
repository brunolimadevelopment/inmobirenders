import Button from "../components/button";

export default function whatsapp() {
  return (
    <div className="h-[382px] flex items-center bg-fixed bg-cover bg-center"  style={{ backgroundImage: "url('src/images/male-architect-in-office.jpg')" }}>
        <div className="container flex justify-between">
            <h2 className="uppercase font-[Reem Kufi] font-bold text-[52px] text-white tracking-[1.5px]">Envíanos un whatsapp</h2>
            <Button className="w-[229px] h-[56px] bg-[#25D366] hover:bg-transparent hover:text-white" url="https://api.whatsapp.com/send?phone=34634050913" text="enviar whatsapp"/>
        </div>
    </div>
  )
}
