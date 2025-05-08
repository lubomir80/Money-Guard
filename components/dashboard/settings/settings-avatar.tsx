import SpinnerMini from '@/components/Spinner-mini'
import { FormLabel } from '@/components/ui/form'
import Image from 'next/image'

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
         <div className="block w-[200] h-[200] border-[6px] mx-auto border-white rounded-full overflow-hidden relative blob bg-white/30">
            <Image src={src} alt={alt} fill className="object-cover" />
         </div>
      )
   }
}

export default SettingsAvatar