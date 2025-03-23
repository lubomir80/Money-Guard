import { fetchDummyCurrency } from "@/helpers/dummyDate"
import CurrencyChart from "@/components/dashboard/currency/CurrencyChart"
import CurrencyTable from "@/components/dashboard/currency/CurrencyTable"




async function Currency() {
   const getCurrency = await fetchDummyCurrency()

   return (
      <section className="hidden sm:block relative flex-1">
         <span className="absolute top-[50%] right-2
         bg-[#2E225F] rounded-md py-1 px-2 text-[10px]">
            Dummy Date
         </span>
         <CurrencyTable rates={getCurrency.rates} />
         <CurrencyChart rates={getCurrency.rates} />
      </section>
   )
}

export default Currency