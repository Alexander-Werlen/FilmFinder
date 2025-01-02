import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,

} from "@/components/ui/navigation-menu"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

import Hamburger from 'hamburger-react'

import { useState } from "react"

function NavBar() {
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)

    return (
    <header>
    <div className="pt-2 sm:py-4 px-2 fixed top-0 z-50 w-screen bg-main-gradient">
    <nav className="flex container mx-auto">
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
            <Link to="/search">
                <Button variant="link" className="text-white text-2xl" tabIndex={-1}>Search</Button>
            </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>

        <div className="sm:hidden ml-auto">
            <div className="relative -top-1">
                <Hamburger size={20} color="white" toggled={navMenuIsOpen} toggle={setNavMenuIsOpen}/>
            </div>
            <Sheet open={navMenuIsOpen} onOpenChange={setNavMenuIsOpen}>
                <SheetContent side="left" className="w-[250px] bg-secondary-gradient border-black pt-3">
                    <SheetHeader>
                        <SheetTitle className="text-white text-left pb-4">NAVIGATION MENU</SheetTitle>
                    </SheetHeader>
                    <div className="w-full text-left py-4">
                        <Link to="/" onClick={() => setNavMenuIsOpen(false)}>
                            <span className=" text-white text-xl underline underline-offset-4">HOME</span>
                        </Link>
                    </div>
                    <div className="w-full text-left py-4">
                        <Link to="/search" onClick={() => setNavMenuIsOpen(false)}>
                            <span className=" text-white text-xl underline underline-offset-4">SEARCH</span>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    </nav>
    </div>
    </header>
    )
}

export default NavBar
