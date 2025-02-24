"use client"

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"

interface CardWrapperProps {
   children: React.ReactNode,
   headerLogo?: boolean,
   headerLabel?: string,
   backButtonLabel: string,
   backButtonHref: string,
   showSocial?: boolean
}

function CardWrapper({
   children,
   headerLogo,
   headerLabel,
   backButtonLabel,
   backButtonHref,
   showSocial
}: CardWrapperProps) {
   return (
      <Card className="w-[540px] shadow-md">
         {children}
      </Card>
   )
}

export default CardWrapper