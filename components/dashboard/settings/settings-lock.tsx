import { RiLockPasswordFill } from 'react-icons/ri'

type SettingsLockProps = {
   size?: number
}

function SettingsLock({ size }: SettingsLockProps) {
   return (
      <div className='flex justify-center'>
         <RiLockPasswordFill
            className='text-whiteText/50'
            size={size || 40} />
      </div>
   )
}

export default SettingsLock