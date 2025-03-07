
export default function cardCheckout() {
  return (
    <div className="pt-[64px] pb-[64px] pl-[16px] pr-[16px] bg-[white] h-[905px] w-[469px]">

      <div className="h-[136px] flex flex-col items-center text-center text-white bg-[#f1561f] pt-[20px]">
        <h2 className="font-reem-kufi text-[1.4rem] font-medium uppercase leading-[36px] tracking-[1px]">1 Render Estático <br />en pack x 5u</h2>
        <span className="font-lato text-[0.9rem] font-bold uppercase leading-[1.4em] tracking-[1.8px]">imagen plana</span>
      </div>
      
      {/* <div class="elementor-price-table__price">
        <div class="elementor-price-table__original-price elementor-typo-excluded">
          <span class="elementor-price-table__currency">€</span>80
        </div>
          <span class="elementor-price-table__currency">€</span>
          <span class="elementor-price-table__integer-part">50</span>
      </div> */}

      <div class="flex flex-wrap justify-center items-end font-josefin text-[60px] font-black text-[#555] py-10">
        <div class="flex items-end me-4 line-through text-base font-normal">
          <span class="text-black leading-none me-1">€</span><span className="flex items-end">80</span>
        </div>
        <div className="flex">
          <span class="text-black text-[0.3em] self-start leading-none me-1">€</span>
          <span class="leading-[40px] text-black">50</span>
        </div>
      </div>

    </div>

  )
}
