import Button from "../components/button";
import CardCheckoutListItem from "./cardCheckoutListItem"

export default function cardCheckout({ tarja, width, text, description, price, discount, plus }) {

  return (
    <div className=" pt-[64px] pb-[64px] pl-[16px] pr-[16px] bg-[white] h-[905px] w-[469px] flex flex-col items-center justify-between">
      <div className="relative h-[136px] w-full flex flex-col gap-[10px] items-center text-center text-white bg-[#f1561f] pt-[20px]">
        <h2 className="font-reem-kufi text-[1.4rem] font-medium uppercase leading-[33px] tracking-[1px]" style={{ width: width}}>{text}</h2>
        <span className="font-lato text-[0.9rem] font-bold uppercase leading-[1.4em] tracking-[1.8px]">{description}</span>
        {tarja && (
        <div class="absolute top-0 right-0 w-[150px] h-[150px] overflow-hidden rotate-90">
          <div class="bg-black text-white text-[13px] font-extrabold text-center uppercase leading-[2] mt-[35px] w-[200%] 
            transform -translate-y-[13.33px] -translate-x-[113px] -rotate-45">
            Popular
          </div>
        </div>
        )}
      </div>
      <div class="flex flex-col font-josefin text-[60px] font-black text-[#555] py-10">
        <div class="flex flex-wrap justify-center items-end">
          <div class="flex items-end me-4 line-through text-base font-normal">
            <span class="text-black leading-none me-1">€</span><span className="leading-none">{price}</span>
          </div>
          <div className="flex items-center">
            <span class="text-black text-[0.3em] self-start leading-none me-1">€</span>
            <span class="leading-[40px] text-black">{discount}</span>
          </div>
        </div>
        <p className="mt-[15px] text-black text-center font-roboto-mono text-[14px] font-light leading-[1em]">{plus}</p>
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
