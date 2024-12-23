import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,

} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

function NavBar() {

  return (
    <div className="flex py-4 fixed top-0 z-40">
        <Link to="/">
            <span className="text-white text-3xl font-bold">FILM</span>
            <span className="text-white text-3xl font-bold">FINDER</span>
        </Link>
        <NavigationMenu className="pl-16">
        <NavigationMenuList>
            <NavigationMenuItem>
            <Link to="/">
                <Button variant="link" className="text-white text-2xl">Home</Button>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl">Otro</Button>
            </Link>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl">Otro</Button>
            </Link>
            <Link to="/otro">
                <Button variant="link" className="text-white text-2xl">Otro</Button>
            </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default NavBar
