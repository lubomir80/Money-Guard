
import { BsExclamationCircleFill } from 'react-icons/bs'

function ProviderMessage() {
   return (
      <div className='flex flex-col gap-5 items-center justify-center px-5 py-5 rounded-xl bg-[#2e225f94] font-bold tracking-wider shadow-md text-center'>
         <span className='blob flex items-center justify-center'>
            <BsExclamationCircleFill color='yellow' className='w-[24px] h-[24px] ' />
         </span>
         <p className='max-w-[80%] text-sm underline'>
            If you use Google or GitHub provider you can&apos;t edit your profile
         </p>
      </div>
   )
}

export default ProviderMessage