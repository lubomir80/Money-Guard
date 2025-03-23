
interface ExchangeRatesProps {
   rates: Record<string, string>
};


function CurrencyTable({ rates }: ExchangeRatesProps) {
   if (!rates) return null


   return (
      <table className="w-full">
         <thead>
            <tr className="bg-whiteText/30 flex tracking-wide 
            [&_th]:px-5 [&_th]:py-2 md:[&_th]:py-4 [&_th]:flex-1">
               <th>Currency</th>
               <th>Purchase</th>
               <th>Sale</th>
            </tr>
         </thead>
         <tbody>
            {Object.entries(rates)?.map(([currency, rate]) => (
               <tr key={currency} className="text-center flex text-whiteText/80
               md:[&_td]:px-5 [&_td]:py-1 md:[&_td]:py-4 [&_td]:flex-1">
                  <td>{currency}</td>
                  <td>{(+rate)?.toFixed(2)}</td>
                  <td>{(+rate + 0.06)?.toFixed(2)}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default CurrencyTable