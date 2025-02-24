'use client'
import { usePathname } from 'next/navigation'

function AuthLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname()
   const getLastPathname = pathname.substring(pathname.lastIndexOf('/') + 1)


   return (
      <main className={`h-full flex flex-col items-center justify-center  bg-no-repeat bg-fixed
         ${getLastPathname === "register" ? "bg-brush bg-cover bg-center" : "bg-golden bg-contain bg-left"}
       bg-cover bg-center `}>
         {children}
      </main>
   )
}

export default AuthLayout