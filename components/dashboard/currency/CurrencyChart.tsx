"use client"

import { TooltipProps } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import { Tooltip, ResponsiveContainer, Area, AreaChart, YAxis, XAxis } from 'recharts';


interface ExchangeRatesProps {
   rates: Record<string, string>
};

function CurrencyChart({ rates }: ExchangeRatesProps) {

   if (!rates) return null

   const currency = Object?.entries(rates).map(([currency, rate]) => { return { currency, rate } })


   return (
      <div className='h-[200px] md:h-[250px]'>
         <ResponsiveContainer width="100%" height="100%">
            <AreaChart
               data={currency}
               margin={{
                  right: 20,
                  left: 0,
                  top: 20,
                  bottom: 5,
               }}
            >
               <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="10%" stopColor='#ccd4dd' stopOpacity={0.9} />
                     <stop offset="75%" stopColor='#28195e' stopOpacity={0.05} />
                  </linearGradient>
               </defs>
               <YAxis dataKey="rate" stroke='#ccd4dd' tickCount={10} tickFormatter={(tick) => `${tick}`} />
               <Area

                  type="monotone"
                  dataKey="rate"
                  stroke="#FF868D"
                  strokeWidth={1.5}
                  fill='url(#color)' />
               <Tooltip content={<CustomTooltip />} />
               <XAxis dataKey="currency" stroke='#ccd4dd' />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   )
}

function CustomTooltip({ active, payload }: TooltipProps<ValueType, NameType>) {
   if (!active || !payload || !payload.length) return null;


   return (
      <div className='rounded-md bg-[#5031be] text-whiteText p-2 shadow-md '>
         <h4 className='text-center'>{payload[0]?.payload.currency}</h4>
         <p>Pur: <span className='text-mango'>{(+payload[0]?.payload.rate)?.toFixed(3)}</span></p>
         <p>Sale: <span className='text-mango'>{((+payload[0]?.payload.rate) + 0.06)?.toFixed(3)}</span></p>
      </div>
   )
}


export default CurrencyChart