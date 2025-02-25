
interface ExchangeRatesProps {
   rates: Record<string, string>
};


function CurrencyTable({ rates }: ExchangeRatesProps) {
   if (!rates) return null


   return (
      <table className="w-full">
         <thead>
            <tr className="bg-whiteText/30 flex tracking-wide">
               <th className="px-5 py-4 flex-1">Currency</th>
               <th className="px-5 py-4 flex-1">Purchase</th>
               <th className="px-5 py-4 flex-1">Sale</th>
            </tr>
         </thead>
         <tbody>
            {Object.entries(rates)?.map(([currency, rate]) => (
               <tr key={currency} className="text-center flex text-whiteText/80">
                  <td className="px-5 py-4 flex-1">{currency}</td>
                  <td className="px-5 py-4 flex-1">{(+rate)?.toFixed(2)}</td>
                  <td className="px-5 py-4 flex-1">{(+rate + 0.06)?.toFixed(2)}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default CurrencyTable