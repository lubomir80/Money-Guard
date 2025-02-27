import Link from "next/link"
import { Button } from "../ui/button"


interface CardFormButtonsProps {
   actionButtonLabel: string,
   backButtonHref: string,
   backButtonLabel: string,
   isPending?: boolean
}

function CardFormButtons({ actionButtonLabel, backButtonHref, backButtonLabel, isPending }: CardFormButtonsProps) {
   return (
      <div className="flex flex-col gap-4 w-[300px] mx-auto">
         <Button disabled={isPending} variant="orange" size="lg" type="submit" className="w-full">
            {!isPending ? actionButtonLabel : "..."}
         </Button>
         <Link href={backButtonHref}>
            <Button disabled={isPending} size="lg" variant="white">
               {!isPending ? backButtonLabel : "..."}
            </Button>
         </Link>
      </div>
   )
}

export default CardFormButtons