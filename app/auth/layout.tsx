'use client'
import { usePathname } from 'next/navigation'





function AuthLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname()
   const getLastPathname = pathname.substring(pathname.lastIndexOf('/') + 1)


   return (
      <div className={`overflow-x-hidden h-full grid place-items-center bg-no-repeat bg-fixed w-screen
         ${getLastPathname === "register" ? "bg-brush bg-cover bg-center" : "bg-golden bg-contain bg-left"}
       bg-cover bg-center `}>
         {children}
      </div>
   )
}

export default AuthLayout