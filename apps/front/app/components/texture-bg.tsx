import { ReactNode } from "react"

const TextureBg = ({
  children,
  className,
}:{
  children: ReactNode,
  className?: string,
}) => {
  return (
    <div className="w-full bg-[url(/paper_bg.webp)] bg-center bg-repeat z-1">
      <div className={`w-full flex flex-col justify-center items-center py-6 pt-24 z-0 ${className}`}>
          {children}
      </div>
    </div>
  )
}

export default TextureBg
