import {cn} from "@/lib/utils.js";
import {useEffect, useState} from "react";
import {MenuIcon, XIcon} from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]



export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);

    })


    return (
    <nav className={cn("sticky w-97/100 8 z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
        )}
    >
        <div className="container flex items-center justify-between ">
            <a className="text-xl font-bold text-primary flex items-center"
               href="#hero">
                <span className="relative z-10">
                    {" "}
                    <span className="text-glow text-foreground">  Naitik Singh's </span> portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div className="hidden md:flex space-x-20 ">
                {navItems.map((item, key) => (
                    <a href={item.href}
                       key={key}
                       className="text-foreground/80 hover:text-primary transition-colors duration 300"
                    >
                        {item.name}
                    </a>
                    ))}
            </div>

            {/* Mobile Nav */}

            <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
            >
                {isMenuOpen ? < XIcon size={24} /> : <MenuIcon size={24} />} </button>


            <div className={cn(
                " fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:midden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                )}
            >

            <div className="flex flex-col space-y-8 text-3xl">
                {navItems.map((item, key) => (
                    <a
                        href={item.href}
                        key={key}
                        className="text-foreground/80 hover:text-primary transition-colors duration 300"
                        onClick={() => { setIsMenuOpen(false); }}

                    >
                        {item.name}
                    </a>
                ))}
            </div>
            </div>
        </div>


    </nav>
    )
};