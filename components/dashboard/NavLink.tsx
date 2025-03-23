'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface NavLinkProps {
   href: string;
   children: React.ReactNode;
   label: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, label }) => {
   const pathname = usePathname()
   const isActive = pathname === href;


   return (
      <Link href={href} className={`p-0 sm:p-3 flex
         items-center space-x-2  rounded-sm hover:bg-purple-700/30 ${isActive ? 'text-whiteText font-bold' : 'text-whiteText/50  hover:text-whiteText/100'
         }`}>
         <span
            className={`[&_svg]:w-[32px] [&_svg]:h-[32px] sm:[&_svg]:w-[16px] sm:[&_svg]:h-[16px] p-[5px] sm:p-1 rounded-sm  
            ${isActive ? "bg-purple-700" : "bg-purple-700/50"}`}>
            {children}
         </span>
         <span className='hidden sm:block'>{label}</span>
      </Link>
   );
};

export default NavLink;