
export default function button({ url, text, className = "" }) {
  return (
    <a 
      className={`
        flex items-center justify-center
         text-sm uppercase tracking-[1px]
        no-underline leading-none letter- font-medium 
        font-[Reem Kufi] text-white border border-transparent 
         cursor-pointer transition-colors duration-200 
        hover:border-amber-700  hover:text-black ${className}`}
      href={url}
      target="_blank"
      title="Contáctanos"
      rel="noopener noreferrer"
      >
      {text}
    </a>
    
  )
}
