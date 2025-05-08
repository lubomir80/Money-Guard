import { Button } from '@react-email/components'
import { RiResetLeftFill } from "react-icons/ri";

type SettingsResetProps = {
   onReset: () => void,
   className?: string,
}

function SettingsReset({ onReset, className }: SettingsResetProps) {
   return (
      <Button
         onClick={onReset}
         className={`z-10 -rotate-90 scale-90 cursor-pointer rounded-full flex items-center justify-center absolute top-0 right-0
            hover:-rotate-180 hover:scale-100 hover:[&_svg]:text-white transition-all 
      ${className}`}>
         <RiResetLeftFill
            className='inline-block text-white/80'
            size={18} />
      </Button>
   )
}

export default SettingsReset