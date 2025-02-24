import Image from "next/image"
import { CardHeader } from "../ui/card"


interface CardHeaderProps {
   headerLogo?: boolean,
   headerLabel?: string,
}


function CardWrapperHeader({ headerLogo, headerLabel }: CardHeaderProps) {

   const isHeaderLabel = headerLogo ?
      (<div className="flex items-center justify-center flex-col">
         <Image src="/logo.png" alt="" width={36} height={36} />
         <h1 className={"text-[27px] drop-shadow-md"}>
            Money Guard
         </h1>
      </div>) : null

   const isHeaderTitle = headerLabel ?
      <h2 className='text-[30px]  text-center'>
         {headerLabel}
      </h2> : null


   return (
      <CardHeader className="items-center">
         {isHeaderLabel}
         {isHeaderTitle}
      </CardHeader>
   )
}

export default CardWrapperHeader