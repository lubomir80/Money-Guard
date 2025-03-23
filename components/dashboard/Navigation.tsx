import NavLink from "./NavLink";
import { IoIosHome } from "react-icons/io";
import { RiBarChartBoxFill } from "react-icons/ri";



export const NAVIGATION = [
   { href: '/dashboard', label: 'Home', icon: <IoIosHome /> },
   { href: '/dashboard/statistics', label: 'Statistics', icon: <RiBarChartBoxFill /> },
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