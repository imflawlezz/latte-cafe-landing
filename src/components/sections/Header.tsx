'use client';
import Link from "next/link";
import { useState } from "react";
import {FacebookIcon, InstagramIcon, MailIcon} from "@/components/shared/Icons";
import {IconButton} from "@/components/shared/IconButton";
import { Menu, X } from "lucide-react";


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-[var(--primary-background)] relative flex items-center justify-between px-4 sm:px-14 h-24 sm:h-32">
            <nav className="hidden md:flex text-[var(--primary)] gap-5 z-10 md:text-sm lg:text-base">
                <Link href="/">About</Link>
                <Link href="/">Menu</Link>
                <Link href="/">Info</Link>
                <Link href="/">Booking</Link>
            </nav>


            <div className="md:hidden z-20 text-[var(--primary)]">
                <IconButton
                    icon={isMenuOpen ? <X /> : <Menu />}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={toggleMenu}
                    className="h-auto w-8"
                />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-[var(--primary)] uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
                    Latte Cafe
                </h1>
            </div>

            <div className="hidden md:flex gap-4 text-[var(--primary-variant)] z-10">
                <IconButton
                    icon={<MailIcon />}
                    aria-label="Mail"
                    className="h-auto w-8"
                />
                <IconButton
                    icon={<FacebookIcon />}
                    aria-label="Facebook"
                    className="h-auto w-8"
                />
                <IconButton
                    icon={<InstagramIcon />}
                    aria-label="Instagram"
                    className="h-auto w-8"
                />
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-[var(--primary-background)] z-10 flex flex-col items-center justify-center gap-8 pt-20">
                    <nav className="flex flex-col items-center text-[var(--primary)] gap-8 text-xl">
                        <Link href="/" onClick={toggleMenu}>About</Link>
                        <Link href="/" onClick={toggleMenu}>Menu</Link>
                        <Link href="/" onClick={toggleMenu}>Info</Link>
                        <Link href="/" onClick={toggleMenu}>Booking</Link>
                    </nav>

                    <div className="flex gap-6 text-[var(--primary-variant)] mt-8">
                        <IconButton
                            icon={<MailIcon />}
                            aria-label="Mail"
                            className="h-auto w-10"
                        />
                        <IconButton
                            icon={<FacebookIcon />}
                            aria-label="Facebook"
                            className="h-auto w-10"
                        />
                        <IconButton
                            icon={<InstagramIcon />}
                            aria-label="Instagram"
                            className="h-auto w-10"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};