import Button from "../components/button";

import CardCheckoutListItem from "./cardCheckoutListItem"
export default function cardCheckout() {
  return (
    <div className="pt-[64px] pb-[64px] pl-[16px] pr-[16px] bg-[white] h-[905px] w-[469px] flex flex-col items-center justify-between">

      <div className="h-[136px] w-full flex flex-col items-center text-center text-white bg-[#f1561f] pt-[20px]">
        <h2 className="font-reem-kufi text-[1.4rem] font-medium uppercase leading-[36px] tracking-[1px]">1 Render Estático <br />en pack x 5u</h2>
        <span className="font-lato text-[0.9rem] font-bold uppercase leading-[1.4em] tracking-[1.8px]">imagen plana</span>
      </div>

      <div class="flex flex-wrap justify-center items-end font-josefin text-[60px] font-black text-[#555] py-10">
        <div class="flex items-end me-4 line-through text-base font-normal">
          <span class="text-black leading-none me-1">€</span><span className="leading-none">80</span>
        </div>
        <div className="flex">
          <span class="text-black text-[0.3em] self-start leading-none me-1">€</span>
          <span class="leading-[40px] text-black">50</span>
        </div>
      </div>

      <div className="flex flex-col pl-[20px] pr-[20px] ">
        <CardCheckoutListItem text="Trabajo desde plano o boceto" />
        <CardCheckoutListItem text="2 Rondas de modificaciones" />
        <CardCheckoutListItem text="Render interior residencial" />
        <CardCheckoutListItem text="50€ c/u llevando 5 o más. Precio de lista 60€" />
        <CardCheckoutListItem text="Render Exterior +30%" />
        <CardCheckoutListItem text="Renders Comerciales, industriales o especiales consultar" />
      </div>

      <Button className="w-[252px] h-[73px] bg-[#F1561F] hover:bg-white" text="¡quiero mi render!" url="https://api.whatsapp.com/send?phone=34634050913"/>
    
    </div>

  )
}
