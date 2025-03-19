import Link from "next/link"
import CardWrapper from "../card/CardWrapper"
import { Button } from "../ui/button"


function ErrorCard() {
   return (
      <CardWrapper
         headerLogo
         headerLabel="Oops! Something went wrong!" >
         <div className="text-center mt-4">
            <Button asChild variant="orange" size="lg">
               <Link href="/auth/login">
                  Back to login
               </Link>
            </Button>
         </div>
      </CardWrapper>
   )
}

export default ErrorCard