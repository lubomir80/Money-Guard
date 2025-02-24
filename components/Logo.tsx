import Image from 'next/image'


function Logo() {
   return (
      <div className="flex items-center justify-center flex-col">
         <Image src="/logo.png" alt="" width={36} height={36} />
         <h1 className={"text-[27px] drop-shadow-md"}>
            Money Guard
         </h1>
      </div>
   )
}

export default Logo