"use client"

import {
   Card,
   CardContent,
} from "@/components/ui/card"
import CardWrapperHeader from "./CardWrapperHeader"
import CardWrapperFooter from "./CardWrapperFooter"


interface CardWrapperProps {
   children: React.ReactNode,
   headerLogo?: boolean,
   headerLabel?: string,
   showSocial?: boolean,
   footerLabel?: string,
   footerHref?: string,
   isPending?: boolean,
   isDialog?: boolean,
   className?: string
}

function CardWrapper({
   children,
   headerLogo,
   headerLabel,
   showSocial,
   footerLabel,
   footerHref,
   isPending,
   isDialog,
   className
}: CardWrapperProps) {

   const cardStyled = {
      styled: "text-whiteText grid bg-gradient-radial from-[#2f2a74] via-[#5710a3] to-[#2e1746] content-center",
      card: "w-full h-full sm:w-[480px] md:w-[540px] sm:h-fit",
      dialog: "h-[calc(100dvh-77px)] sm:h-full",
   }


   return (
      <Card
         className={`
         ${className} ${cardStyled.styled} 
         ${isDialog ? cardStyled.dialog : cardStyled.card} `}>
         <div className={`py-10 overflow-y-auto`}>
            <CardWrapperHeader headerLogo={headerLogo} headerLabel={headerLabel} />
            <CardContent className="flex flex-col max-w-[360px] mx-auto ">
               {children}
            </CardContent>
            {!isPending ?
               <CardWrapperFooter showSocial={showSocial}
                  footerLabel={footerLabel} footerHref={footerHref} /> :
               <div className="text-center">
                  <span className="text-whiteText/80">
                     Loading...
                  </span>
               </div>}
         </div>
      </Card>
   )
}

export default CardWrapper