import { pause } from "@/helpers"

export default async function DefaultAnalytics() {
   await pause(1000)

   return (
      <section className="h-96 w-96 border-2 rounded-lg p-4 bg-purple-700">
         <h2 className="text-xl"> Currency 😎</h2>
      </section>
   )
}