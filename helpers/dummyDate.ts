import { pause } from "@/helpers"

export async function fetchDummyCurrency() {
   await pause(1000)
   const date = new Date();

   const data = {
      date: date,
      base: 'USD',
      rates: { EUR: '0.97005', PLN: '4.14325', GBP: '0.805023' }
   }

   return data;
}

