import { fetchDummyCurrency } from "@/helpers/dummyDate"
import CurrencyChart from "@/components/dashboard/currency/CurrencyChart"
import CurrencyTable from "@/components/dashboard/currency/CurrencyTable"




async function Currency() {
   const getCurrency = await fetchDummyCurrency()


   return (
      <section className="hidden sm:block relative flex-1">
         <CurrencyTable rates={getCurrency.rates} />
         <CurrencyChart rates={getCurrency.rates} />
      </section>
   )
}

export default Currency