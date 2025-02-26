
export default function concept({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-[30px]">
        <div className="w-[54] h-[54]">{icon}</div>
        <div className="w-[366px]">
            <h3 className="text-black font-[Reem Kufi] font-bold tracking-[1.5px] uppercase text-[20px] mb-5">{title}</h3>
            <p className="text-[15px] font-[Open Sans] text-[#727272] font-normal leading-[22.5px]">{desc}</p>
        </div>
    </div>
  )
}
