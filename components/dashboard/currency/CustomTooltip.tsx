import { TooltipProps } from 'recharts';
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";


function CustomTooltip({ active, payload }: TooltipProps<ValueType, NameType>) {
   if (!active || !payload || !payload.length) return null;

   return (
      <div className='rounded-md bg-[#5031be] text-whiteText p-2 shadow-md '>
         <h4 className='text-center'>{payload[0]?.payload.currency}</h4>
         <p className=''>Pur: <span className='text-mango'>{(+payload[0]?.payload.rate)?.toFixed(3)}</span></p>
         <p className=''>Sale: <span className='text-mango'>{((+payload[0]?.payload.rate) + 0.06)?.toFixed(3)}</span></p>
      </div>
   )
}

export default CustomTooltip