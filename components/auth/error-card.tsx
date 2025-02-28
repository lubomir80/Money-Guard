import Link from "next/link"
import CardWrapper from "../card/CardWrapper"
import { Button } from "../ui/button"


function ErrorCard() {
   return (
      <CardWrapper
         headerLogo
         headerLabel="Oops! Something went wrong!" >
         <div className="text-center mt-4">
            <Link href="/auth/login">
               <Button variant="orange" size="lg">
                  Back to login
               </Button>
            </Link>
         </div>
      </CardWrapper>
   )
}

export default ErrorCard