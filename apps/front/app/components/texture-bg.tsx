import { ReactNode } from "react"

const TextureBg = ({
  children,
  className,
}:{
  children: ReactNode,
  className?: string,
}) => {
  return (
    <div className="w-full bg-[url(/white-waves.webp)] bg-center bg-repeat z-0">
      <div className={`w-full flex flex-col justify-center items-center py-6 pt-24 ${className}`}>
          {children}
      </div>
    </div>
  )
}

export default TextureBg
