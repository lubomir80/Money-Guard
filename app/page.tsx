import CardWrapper from "@/components/card/CardWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
   return (
      <CardWrapper
         headerLogo
         headerLabel="Track expenses and incomes😉">
         <div className="text-center">
            <Link href="/auth/login" >
               <Button className="w-[300px]" variant="orange" size="lg">
                  Log in
               </Button>
            </Link>
         </div>
      </CardWrapper>
   )
}
