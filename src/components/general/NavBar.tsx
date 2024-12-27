import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,

} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

function NavBar() {

  return (
    <nav className="flex py-4 fixed top-0 z-40">
        <Link to="/">
            <span className="text-white text-3xl font-bold">FILMFINDER</span>
        </Link>
        <NavigationMenu className="pl-16 hidden sm:block">
        <NavigationMenuList>
            <NavigationMenuItem>
            <Link to="/">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Home</Button>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Otro</Button>
            </Link>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Otro</Button>
            </Link>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Otro</Button>
            </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    </nav>
  )
}

export default NavBar
