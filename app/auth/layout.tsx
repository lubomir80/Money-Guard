import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
   return (
      <main className={`h-full flex flex-col items-center justify-center  bg-no-repeat bg-fixed
       bg-cover bg-center `}>
         {children}
      </main>
   )
}

export default AuthLayout