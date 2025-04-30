import Link from "next/link"
import { Button } from "../ui/button"
import SpinnerMini from "../Spinner-mini"


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
            {!isPending ? actionButtonLabel : <SpinnerMini />}
         </Button>
         <Link href={backButtonHref}>
            <Button disabled={isPending} size="lg" variant="white">
               {!isPending ? backButtonLabel : <SpinnerMini classname="border-purple-800" />}
            </Button>
         </Link>
      </div>
   )
}

export default CardFormButtons