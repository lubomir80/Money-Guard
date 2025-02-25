import NavLink from "./NavLink";
import { IoIosHome } from "react-icons/io";
import { RiBarChartBoxFill } from "react-icons/ri";



export const NAVIGATION = [
   { href: '/dashboard', label: 'Home', icon: <IoIosHome /> },
   { href: '/dashboard/statistics', label: 'Statistics', icon: <RiBarChartBoxFill /> },
];



function Navigation() {
   return (
      <nav className="flex flex-col px-4 pt-10 pb-4">
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