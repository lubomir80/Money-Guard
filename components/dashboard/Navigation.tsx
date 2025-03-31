import NavLink from "./NavLink";
import { IoIosHome } from "react-icons/io";
import { RiBarChartBoxFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";



export const NAVIGATION = [
   { href: '/dashboard', label: 'Home', icon: <IoIosHome /> },
   { href: '/dashboard/statistics', label: 'Statistics', icon: <RiBarChartBoxFill /> },
   { href: '/dashboard/settings', label: 'Settings', icon: <IoMdSettings /> },
];



function Navigation() {
   return (
      <nav className="flex 
      items-center justify-center p-5 gap-10
      sm:items-stretch sm:justify-stretch
      sm:flex-col sm:px-4 sm:pt-10 sm:pb-4 sm:gap-0">
         {NAVIGATION.map((nav, index) =>
            <NavLink key={`link-${index}`}
               href={nav.href}
               label={nav.label}>
               {nav.icon}
            </NavLink>)}
      </nav>
   )
}

export default Navigation