export default function cardCheckoutListItem({ text }) {
  return (
    <div className="flex  flex-col ml-[15px] mr-[15px]">
        <div className="flex items-center gap-[10px]">
            <i>🙂</i>
            <p className="font-open text-[15px] font-medium leading-[1.4em] tracking-[1px]">{text}</p>
        </div>
        <div class="border border-[#eeeeee] w-full mt-[15px] mb-[15px]"></div>
    </div>
  )
}
