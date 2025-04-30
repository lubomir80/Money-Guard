import Image from 'next/image'
import LogoImg from "@/public/moneyguard.png"
import Link from 'next/link'




function Logo({ LinkLogo }: { LinkLogo?: boolean }) {
   if (LinkLogo) {
      return (
         <Link href="/dashboard" className="flex items-center justify-center flex-col">
            <Image src={LogoImg} alt="" className='w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]' />
            <h1 className={"text-[12px] md:text-[18px] drop-shadow-md"}>
               Money Guard
            </h1>
         </Link>
      )
   }

   return (
      <div className="flex items-center justify-center flex-col">
         <Image src={LogoImg} alt="" className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px]' />
         <h1 className={"text-[20px] md:text-[27px] drop-shadow-md"}>
            Money Guard
         </h1>
      </div>
   )
}

export default Logo