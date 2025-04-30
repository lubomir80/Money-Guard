import { CardHeader } from "../ui/card"
import Logo from "../Logo"


interface CardHeaderProps {
   headerLogo?: boolean,
   headerLabel?: string,
}


function CardWrapperHeader({ headerLogo, headerLabel }: CardHeaderProps) {

   const isHeaderLabel = headerLogo ? <Logo /> : null

   const isHeaderTitle = headerLabel ?
      <h2 className='text-[30px] tracking-wide text-center max-w-[360px]'>
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