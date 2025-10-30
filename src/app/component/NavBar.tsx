'use client'


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Search, Upload } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";
import { User } from 'lucide-react';

type Navbar = {
    label: string,
    href: string,
    isDropdown?: boolean,
    SubItems?: SubItems[]
}

type SubItems = {
    label: string,
    href: string,
    icon: string
}

export function Navbar() {

    const navlist: Navbar[] = [
        { label: "Home", href: "/home" },
        {
            label: "Discover",
            href: "/discover",
            isDropdown: true,
            SubItems: [
                { label: "3d Models", icon: "🧊", href: "/discover/3d-models" },
                { label: "EBooks", icon: "📖", href: "/discover/ebooks" },
                { label: "Audio", icon: "🔊", href: "/discover/audio" },
                { label: "Link", icon: "🔗", href: "/discover/link" },
                { label: "Digital Products", icon: "💻", href: "/discover/digital-products" },
                { label: "Video", icon: "🎥", href: "/discover/video" },
                { label: "Texture Packs", icon: "🎨", href: "/discover/texture-packs" }

            ]
        },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },

    ]
    const [showDropdown, setShowDropDown] = useState(false)


    return (
        <div className="px-2 lg:px-14 w-full bg-neutral-900 border-neutral-700 sticky top-0 z-50">
            <div className="flex h-16 sm:h-20 justify-between items-center">

                {/* LEFT SECTION: Logo + Divider + Nav Links */}
                <div className="flex items-center gap-x-3 sm:gap-x-8 shrink-0">

                    {/* Logo with BETA badge */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/3DIMLI LOGO.svg"
                            alt="3DIMLI Logo"
                            width={120}
                            height={120}
                            className="h-9 w-auto"
                        />
                        <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-muted-foreground border-l dark:border-l-neutral-700 pl-2 h-full">
                            <span>BETA</span>
                            <span>1.0.1</span>
                        </div>
                    </Link>

                    {/* Vertical Divider */}
                    <div className="hidden h-8 border-s border-neutral-200 md:block dark:border-neutral-700"></div>

                    {/* Nav Links */}
                    <nav className="hidden lg:flex items-center text-lg text-neutral-100  ">
                        {navlist.map((item) => (
                            item.isDropdown ? (
                                <DropdownMenu key={item.label}>
                                    <DropdownMenuTrigger className="text-opacity-80 relative inline-flex h-10 sm:h-12 items-center px-3 py-1.5 text-sm font-medium text-neutral-100 dark:text-neutral-300 hover:text-opacity-100">
                                        {item.label}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700">
                                        <div className="px-2 py-1.5 text-sm font-semibold text-gray-400">
                                            Product Types
                                        </div>
                                        {item.SubItems?.map((subItem) => (
                                            <DropdownMenuItem key={subItem.label} asChild>
                                                <Link href={subItem.href} className="flex items-center gap-2">
                                                    <span>{subItem.icon}</span>
                                                    <span>{subItem.label}</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-opacity-80 relative inline-flex h-10 sm:h-12 items-center px-3 py-1.5 text-sm font-medium text-neutral-100 dark:text-neutral-300 hover:text-opacity-100 whitespace-nowrap"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>
                </div>

                {/* RIGHT SECTION: Search + Discord + Upload + Avatar */}
                <div className="inline-flex items-center w-full justify-end gap-1 lg:gap-2">

                    {/* Search Input */}
                    <div className="self-center w-full max-w-lg">
                        <form>
                            <div className="relative">
                                <div className="inline-flex w-full gap-1 h-10 py-2 justify-between rounded-xl border bg-transparent text-sm border-neutral-200 dark:border-neutral-700 focus:ring-1 focus:ring-slate-500 focus:border-slate-500">
                                    <input
                                        title="search"
                                        className="pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:focus:ring-slate-400 dark:focus:border-slate-400 z-20 rounded-full peer/search"
                                        type="search"
                                        placeholder="Search..."
                                    />
                                    <button type="submit" className="cursor-pointer flex items-center justify-center w-fit border-l border-neutral-200 dark:border-neutral-700 px-3">
                                        <Search className="shrink-0 size-4 text-gray-400 dark:text-white/60" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Discord Button */}
                    <Link href="https://discord.gg/d48csuWe46" target="_blank">
                        <button className="bg-linear-to-bl from-gray-900 to-blue-800 hover:bg-[#4752c4] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <FaDiscord className="w-7 h-5 relative z-10" />
                            <span className="font-medium tracking-wide relative z-10">Discord</span>
                        </button>
                    </Link>


                    {/* Upload Button */}
                    <button className="bg-linear-to-bl from-gray-900 to-blue-800 shine-infinite text-white font-medium px-6 md:px-6 py-1.5 md:py-3 rounded-lg flex items-center gap-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <Upload className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">Upload</span>
                    </button>

                    {/* User Avatar */}
                    <button className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-gray-300 dark:border-neutral-700">
                        <User className="h-8 w-6 text-gray-300" />
                    </button>
                </div>
            </div>
        </div>
    )
}