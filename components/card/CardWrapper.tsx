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
   footerHref?: string
}

function CardWrapper({
   children,
   headerLogo,
   headerLabel,
   showSocial,
   footerLabel,
   footerHref
}: CardWrapperProps) {




   return (
      <Card className="w-[540px] shadow-md text-white px-12 py-10  cc">
         <CardWrapperHeader headerLogo={headerLogo} headerLabel={headerLabel} />
         <CardContent className="flex flex-col ">
            {children}
         </CardContent>
         <CardWrapperFooter
            showSocial={showSocial}
            footerLabel={footerLabel}
            footerHref={footerHref} />
      </Card>
   )
}

export default CardWrapper