import Logo from '../Logo'
import LogoutButton from '../logout-button'
import User from './User'

function Header() {
   return (
      <header className='flex items-center justify-between p-5 
      bg-gradient-to-r from-[#2E1746] via-[#5710a3] to-[#2E225F] shadow-xl border-b border-black/20'>
         <Logo small />
         <div className='p-1 flex justify-center items-center'>
            <User />
            <span className='text-whiteText/60'>|</span>
            <LogoutButton />
         </div>
      </header>
   )
}

export default Header