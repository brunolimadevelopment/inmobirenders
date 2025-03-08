import CardCheckout from './cardCheckout'

export default function checkout() {
  return (
    <section className="w-full pt-[40px] pb-[40px]" style={{ backgroundImage: "url('src/images/render-scaled.jpg')" }}>
        <div className="container">
            <h2 className="text-center text-[35px] font-bold text-white uppercase font-[Reem Kufi] leading-tight tracking-[2px] leading-[1.2] pt-[80px] pb-[80px]">¡Promoción otoño/invierno!</h2>
            <div className="flex justify-center gap-[20px]">
              <CardCheckout tarja={false} width={270} text={'1 Render Estático en pack x 5u'} description={'imagen plana'} price={80} discount={50} plus={null} />
              <CardCheckout tarja={true} width={140} text={'Visual 360º'} description={'por estancia hasta 50 m2'} price={190} discount={95} plus={'+ IVA'} />
            </div>
        </div>
    </section>
  )
}
