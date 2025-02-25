import { pause } from "@/helpers"


async function Currency() {
   await pause(1000)
   return (
      <section className="px-10 py-3 bg-[#2E225F] shadow-md">
         <p className="uppercase text-whiteText/40 text-[12px]">Your balance</p>
         <h1 className="pt-2 font-bold text-2xl">2 500<span className="text-lg"> USD</span></h1>
      </section>
   )
}

export default Currency