import Link from "next/link"
import { Button } from "./ui/button"

interface FormButtonsProps {
   actionButtonLabel: string,
   backButtonHref: string,
   backButtonLabel: string
}

function FormButtons({ actionButtonLabel, backButtonHref, backButtonLabel }: FormButtonsProps) {
   return (
      <div className="flex flex-col gap-4 w-[300px] mx-auto">
         <Button variant="orange" size="lg" type="submit" className="w-full">
            {actionButtonLabel}
         </Button>
         <Link href={backButtonHref}>
            <Button size="lg" variant="white">
               {backButtonLabel}
            </Button>
         </Link>
      </div>
   )
}

export default FormButtons