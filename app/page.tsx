import CardWrapper from "@/components/card/CardWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Home() {
   return (
      <main className="h-full flex flex-col items-center justify-center">
         <CardWrapper
            headerLogo
            headerLabel="Track expenses and incomes😉">
            <div className="text-center">
               <Link href="/auth/login" >
                  <Button variant="orange" size="lg">
                     Log in
                  </Button>
               </Link>
            </div>
         </CardWrapper>
      </main>
   )
}
