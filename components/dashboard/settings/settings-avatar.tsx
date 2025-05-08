import SpinnerMini from '@/components/Spinner-mini'
import { FormLabel } from '@/components/ui/form'
import Image from 'next/image'
import { RiLockPasswordFill } from 'react-icons/ri'

type SettingsAvatarProps = {
   src: string,
   alt?: string,
   label?: boolean,
   isPending?: boolean
}


function SettingsAvatar({ label, src, alt = "", isPending }: SettingsAvatarProps) {


   if (label) {
      return (
         <FormLabel className="block w-[200] h-[200] border-[6px] mx-auto border-white rounded-full overflow-hidden relative blob cursor-pointer bg-white/30"
            htmlFor="upload">
            {isPending ?
               <div className='h-full w-full flex items-center justify-center'>
                  <SpinnerMini />
               </div> :
               <Image src={src} alt={alt} fill className="object-cover" />}
         </FormLabel>
      )
   } else {
      return (
         <div className="block w-[200] h-[200] border-[6px] mx-auto border-white rounded-full overflow-hidden relative bg-white/30 relative">
            <Image src={src} alt={alt} fill className="object-cover blur-sm" />
            <div className='flex justify-center items-center absolute w-full h-full bg-white/20'>
               <RiLockPasswordFill
                  className='text-whiteText shadow-xl'
                  size={40} />
            </div>
         </div>
      )
   }
}

export default SettingsAvatar