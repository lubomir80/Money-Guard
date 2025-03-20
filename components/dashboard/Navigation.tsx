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
      md:items-stretch md:justify-stretch
      md:flex-col md:px-4 md:pt-10 md:pb-4 md:gap-0">
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