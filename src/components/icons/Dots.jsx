

const Dots = ({onClick, className}) => {
  return (
    <div onClick={onClick} className={`w-[48px] h-[48px] ${className}`}>
      <svg className="size-full text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 12h0m6 0h0m6 0h0"/>
      </svg>
    </div>
  )
}

export default Dots