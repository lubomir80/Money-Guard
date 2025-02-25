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
      <Link href={href} className={`flex items-center space-x-2 p-3 rounded-md hover:bg-purple-700/30 ${isActive ? 'text-whiteText font-bold' : 'text-whiteText/50  hover:text-whiteText/100'
         }`}>
         <span className={`p-1 rounded-md  ${isActive ? "bg-purple-700" : "bg-purple-700/50"}`}>{children}</span>
         <span className=''>{label}</span>
      </Link>
   );
};

export default NavLink;