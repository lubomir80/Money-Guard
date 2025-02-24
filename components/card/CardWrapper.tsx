"use client"

import {
   Card,
   CardContent,
   CardFooter,
} from "@/components/ui/card"
import CardWrapperHeader from "./CardHeader"


interface CardWrapperProps {
   children: React.ReactNode,
   headerLogo?: boolean,
   headerLabel?: string,
   showSocial?: boolean
}

function CardWrapper({
   children,
   headerLogo,
   headerLabel,
   showSocial
}: CardWrapperProps) {




   return (
      <Card className="w-[540px] shadow-md text-white px-12 py-10  bg-gradient-radial from-[#0500447e] via-[#5710a3] to-[#3d225a]">
         <CardWrapperHeader headerLogo={headerLogo} headerLabel={headerLabel} />
         <CardContent className="flex flex-col ">
            {children}
         </CardContent>
         {showSocial ?
            <CardFooter>
               <div> // TO DO SOCIALS</div>
            </CardFooter> : null}
      </Card>
   )
}

export default CardWrapper