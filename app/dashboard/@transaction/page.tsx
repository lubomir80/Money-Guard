import { pause } from "@/helpers"

export default async function Team() {
   await pause(1000)
   // throw new Error('Data not available')

   return (
      <>
         <h2 className="text-xl">Transactions table</h2>
      </>
   )
}