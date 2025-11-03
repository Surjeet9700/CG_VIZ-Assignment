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
import { Search, Upload, User, Home, Compass, ShoppingCart, UserCircle, ChevronLeft } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { FaDiscord } from "react-icons/fa";

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
    const [showMobileSearch, setShowMobileSearch] = useState(false)


    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <div className="hidden lg:block z-10 border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 transition-colors duration-300 ease-in-out sticky top-0">
                <div className="px-2 lg:px-14 w-full">
                    <div className="flex h-16 justify-between items-center sm:h-20">

                        {/* LEFT SECTION: Logo + Divider + Nav Links */}
                        <div className="flex items-center gap-x-3 sm:gap-x-8 shrink-0">

                            {/* Logo with BETA badge */}
                            <Link href="/" className="inline-block shrink-0 text-primary-600 cursor-pointer mt-[5px]">
                                <div className="flex items-center">
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
                                </div>
                            </Link>

                            {/* Vertical Divider */}
                            <div className="hidden h-8 border-s border-neutral-200 md:block dark:border-neutral-700"></div>

                            {/* Nav Links */}
                            <nav className="hidden sm:block">
                                <ul className="nc-Navigation items-center hidden lg:flex">
                                    {navlist.map((item) => (
                                        item.isDropdown ? (
                                            <li key={item.label} className="relative focus:outline-none focus:ring-0">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300">
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
                                            </li>
                                        ) : (
                                            <li key={item.label} className="relative focus:outline-none focus:ring-0">
                                                <Link
                                                    href={item.href}
                                                    className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300 whitespace-nowrap"
                                                >
                                                    <span>{item.label}</span>
                                                </Link>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* RIGHT SECTION: Search + Discord + Upload + Avatar */}
                        <div className="inline-flex items-center justify-end w-full gap-1 lg:gap-2">

                            {/* Search Input */}
                            <div className="self-center w-full">
                                <form>
                                    <div className="relative">
                                        <div className="inline-flex w-full h-10 py-2 justify-between rounded-lg border bg-transparent gap-1 text-sm border-neutral-200 dark:border-neutral-700 focus-within:border-neutral-200 dark:focus-within:border-neutral-700">
                                            <input
                                                title="search"
                                                className="peer/search pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 focus:ring-0 z-20 rounded-full appearance-none focus:border-none focus:shadow-none focus-visible:outline-none"
                                                type="search"
                                                placeholder="Search..."
                                                style={{ outline: 'none', boxShadow: 'none' }}
                                            />
                                            <button type="submit" className="cursor-pointer flex items-center justify-center w-fit border-l border-neutral-200 dark:border-neutral-700 dark:border-l-neutral-700 px-3 z-20">
                                                <Search className="shrink-0 size-4 text-gray-400 dark:text-white/60" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Discord Button */}
                            <div className="LangDropdown hidden self-center md:flex">
                                <Link href="https://discord.gg/d48csuWe46" target="_blank">
                                    <button className="bg-[#5865F2] dark:bg-gradient-to-bl dark:from-gray-900 dark:to-[#4F46E5] text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-3 hover:bg-[#4752c4] dark:hover:bg-[#4F46E5] transition-all duration-300 ease-in-out text-base relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                                        <FaDiscord className="w-7 h-5 relative z-10" />
                                        <span className="font-medium tracking-wide relative z-10 cursor-pointer">Discord</span>
                                    </button>
                                </Link>
                            </div>

                            {/* Upload Button */}
                            <div className="min-w-fit inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 outline outline-gray-500/70 dark:outline-gray-500/30 border-input gap-2 transform transition-transform ease-in-out active:scale-95 active:-translate-y-[-0.015rem] group/button border-0 outline-0 bg-gradient-to-bl from-gray-900 to-[#4F46E5] hover:bg-[#4F46E5] dark:bg-gradient-to-bl dark:from-gray-900 dark:to-[#4F46E5] dark:hover:bg-[#4F46E5] text-white font-medium px-4 md:px-6 py-2 md:py-3 relative overflow-hidden group shine-infinite cursor-pointer">
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                                <Upload className="w-4 h-4 mr-2 inline-block relative z-10" />
                                <span className="relative z-10 text-xs md:text-sm">Upload</span>
                            </div>

                            {/* User Avatar */}
                            <div data-headlessui-state="">
                                <button className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none sm:h-12 sm:w-12 dark:text-neutral-300 dark:hover:bg-neutral-800" type="button" aria-expanded="false">
                                    <div className="AvatarDropdown self-center">
                                        <div className="relative">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none sm:h-12 sm:w-12 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-gray-300 dark:border-neutral-700 px-3">
                                                <User className="h-7 w-7" />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Top Navbar */}
            <nav className="lg:hidden sticky top-0 z-999 w-full inline-flex justify-between items-center p-2 shadow-[rgba(17,17,26,0.1)_0px_0px_16px] border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 h-14" aria-label="Mobile navigation">
                <div className="w-full">
                    <Link href="/" className="inline-block shrink-0 w-full text-start mt-[5px] px-1">
                        <div className="flex items-center">
                            <Image
                                src="/3DIMLI LOGO.svg"
                                alt="3DIMLI Logo"
                                width={120}
                                height={120}
                                className="h-7 w-auto"
                            />
                            <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-muted-foreground border-l dark:border-l-neutral-700 pl-2 h-full">
                                <span>BETA</span>
                                <span>1.0.1</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <Button
                    onClick={() => setShowMobileSearch(!showMobileSearch)}
                    variant="ghost"
                    size="icon"
                    className="px-2 inline-flex border-l dark:border-l-neutral-700 items-center justify-center gap-2 cursor-pointer"
                    aria-label="Toggle search"
                >
                    <Search className="w-6 h-6 text-neutral-400 dark:text-neutral-300 stroke-[1.3]" />
                </Button>
            </nav>

            {/* Mobile Search Overlay - Full Screen */}
            {showMobileSearch && (
                <div className="lg:hidden fixed inset-0 z-1000 bg-white dark:bg-neutral-900">
                    {/* Search Bar at Top */}
                    <div className="sticky top-0 z-1001 bg-white dark:bg-neutral-900 border-b border-neutral-200/70 dark:border-neutral-700 p-3">
                        <div className="flex items-center gap-3">
                            <Button
                                onClick={() => setShowMobileSearch(false)}
                                variant="ghost"
                                size="icon"
                                className="text-neutral-600 dark:text-neutral-400"
                                aria-label="Close search"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <div className="flex-1">
                                <div className="relative">
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        className="w-full h-10 pl-4 pr-10 bg-neutral-100 dark:bg-neutral-800 border-none rounded-lg text-sm placeholder:text-neutral-400 dark:text-neutral-100 focus:outline-none focus:ring-0"
                                        autoFocus
                                    />
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search Results/Content Area */}
                    <div className="overflow-y-auto h-full pb-20">
                        {/* You can add search results or suggestions here */}
                    </div>
                </div>
            )}

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-999 h-full w-full inline-flex justify-evenly items-center mx-auto dark:bg-neutral-700/50 bg-white border-t border-neutral-200 dark:border-neutral-700" style={{ height: '60px' }} aria-label="Mobile bottom navigation">
                <Link href="/" className="relative flex flex-col items-center justify-center self-center bg-white dark:bg-neutral-800 group w-full h-full text-xs font-medium text-blue-600 dark:text-green-500">
                    <Home className="w-6 h-6 mb-1 stroke-[1.5]" />
                    <span>Home</span>
                </Link>
                <Link href="/search" className="relative flex flex-col items-center justify-center self-center bg-white dark:bg-neutral-800 dark:text-white group w-full h-full text-xs text-black font-medium">
                    <Compass className="w-6 h-6 mb-1 stroke-[1.5]" />
                    <span>Explore</span>
                </Link>
                <Link href="/cart" className="relative flex flex-col items-center justify-center self-center bg-white dark:bg-neutral-800 dark:text-white group w-full h-full text-xs text-black font-medium">
                    <ShoppingCart className="w-6 h-6 mb-1 stroke-[1.5]" />
                    <span>Cart</span>
                </Link>
                <Link href="/my-account" className="relative flex flex-col items-center justify-center self-center bg-white dark:bg-neutral-800 dark:text-white group w-full h-full text-xs text-black font-medium">
                    <UserCircle className="w-6 h-6 mb-1 stroke-[1.5]" />
                    <span>Profile</span>
                </Link>
            </nav>
        </>
    )
}
