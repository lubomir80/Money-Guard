import { auth } from "@/auth"
import { pause } from "@/helpers"

export default async function Team() {
   await pause(1000)
   // throw new Error('Data not available')
   const session = await auth()
   const user = session?.user


   return (
      <>
         <h2 className="text-xl">Transactions table</h2>
      </>
   )
}