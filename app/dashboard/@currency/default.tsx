import { pause } from "@/helpers"
import { fetchFakeCurrency } from "@/helpers/fakeData"
import CurrencyChart from "@/components/dashboard/currency/CurrencyChart"
import CurrencyTable from "@/components/dashboard/currency/CurrencyTable"




async function Currency() {
   await pause(3000)
   const getCurrency = await fetchFakeCurrency()


   return (
      <section>
         <CurrencyTable rates={getCurrency.rates} />
         <CurrencyChart rates={getCurrency.rates} />
      </section>
   )
}

export default Currency