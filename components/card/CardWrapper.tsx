"use client"

import {
   Card,
   CardContent,
} from "@/components/ui/card"
import CardWrapperHeader from "./CardWrapperHeader"
import CardWrapperFooter from "./CardWrapperFooter"
import Spinner from "../Spinner"


interface CardWrapperProps {
   children: React.ReactNode,
   headerLogo?: boolean,
   headerLabel?: string,
   showSocial?: boolean,
   footerLabel?: string,
   footerHref?: string,
   isPending?: boolean
}

function CardWrapper({
   children,
   headerLogo,
   headerLabel,
   showSocial,
   footerLabel,
   footerHref,
   isPending
}: CardWrapperProps) {




   return (
      <Card className="
      rounded-none h-full w-full flex flex-col items-center justify-center
      md:w-[540px] md:shadow-md md:rounded-xl md:h-auto
      text-white md:px-12 md:py-10
      bg-gradient-radial from-[#2f2a74] via-[#5710a3] to-[#2e1746]
      ">
         <CardWrapperHeader headerLogo={headerLogo} headerLabel={headerLabel} />
         <CardContent className="flex flex-col ">
            {children}
         </CardContent>
         {!isPending ? <CardWrapperFooter
            showSocial={showSocial}
            footerLabel={footerLabel}
            footerHref={footerHref} /> :
            <Spinner />}
      </Card>
   )
}

export default CardWrapper