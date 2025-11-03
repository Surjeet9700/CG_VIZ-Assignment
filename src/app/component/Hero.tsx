'use client'

import { useState, useEffect } from 'react'
import { TypeAnimation } from "react-type-animation";
import { Box, ShoppingCart, Tag, Search, Users, Upload, Download, LayoutGrid, Star, Layers, Heart, Headphones } from 'lucide-react'
import { FloatingBubble } from './FloatingBubble'
import { motion } from 'framer-motion'

export function Hero() {
    // Track scroll progress (0-1) to control all animations
    const [scrollProgress, setScrollProgress] = useState(0)
    // Only fade content on desktop (1024px+) to maintain visibility on mobile/tablet
    const [isDesktop, setIsDesktop] = useState(false)
    // Track if component is mounted to prevent hydration errors
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        // Detect screen size to enable/disable fade animations
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024)
        }

        checkDesktop()
        window.addEventListener('resize', checkDesktop)

        return () => window.removeEventListener('resize', checkDesktop)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const triggerElement = document.getElementById('triggerID')
            if (!triggerElement) return

            const rect = triggerElement.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Calculate scroll progress based on parent container height
            const parent = triggerElement.parentElement
            if (!parent) return

            const parentRect = parent.getBoundingClientRect()
            const parentHeight = parent.offsetHeight

            const scrolled = -parentRect.top
            const scrollableDistance = parentHeight - windowHeight
            // Normalize progress to 0-1 range for smooth animations
            const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance))

            setScrollProgress(progress)
        }

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const bubbles = [
        // Bubble positions use pixel values that scale responsively via FloatingBubble component
        {
            icon: Box,
            color: 'text-indigo-600',
            gradient: 'from-white/70 to-indigo-50 dark:from-white/10 dark:to-transparent',
            x: -650, // Positioned left of center
            y: -480, // Positioned above center
            z: 50,
            label: '3D Models',
            desc: 'Browse thousands of high-quality 3D models for your projects. Filter by category, style, format, and more.',
            image: '/car-model.40128753.avif',
            tooltipPosition: 'top' as const
        },
        // bubble-1: ShoppingCart 
        {
            icon: ShoppingCart,
            color: 'text-emerald-600',
            gradient: 'from-white/70 to-emerald-50 dark:from-white/10 dark:to-transparent',
            x: 560,
            y: -450,
            z: 20,
            label: 'Checkout',
            desc: 'Fast and secure payments for your 3D model purchases.',
            tooltipPosition: 'top' as const
        },
        // bubble-2: Tag 
        {
            icon: Tag,
            color: 'text-amber-600',
            gradient: 'from-white/70 to-amber-50 dark:from-white/10 dark:to-transparent',
            x: -470,
            y: -350,
            z: 40,
            label: 'Pricing',
            desc: 'Flexible pricing options for creators and businesses.',
            tooltipPosition: 'top' as const
        },
        // bubble-3: Search 
        {
            icon: Search,
            color: 'text-blue-600',
            gradient: 'from-white/70 to-blue-50 dark:from-white/10 dark:to-transparent',
            x: 410,
            y: -250,
            z: 40,
            label: 'Search',
            desc: 'Find exactly what you need with our powerful search tools.',
            tooltipPosition: 'top' as const
        },
        // bubble-4: Users 
        {
            icon: Users,
            color: 'text-purple-600',
            gradient: 'from-white/70 to-purple-50 dark:from-white/10 dark:to-transparent',
            x: -690,
            y: -240,
            z: 30,
            label: 'Community',
            desc: 'Join thousands of 3D artists and designers.',
            tooltipPosition: 'top' as const
        },
        // bubble-5: Upload with image 
        {
            icon: Upload,
            color: 'text-teal-600',
            gradient: 'from-white/70 to-teal-50 dark:from-white/10 dark:to-transparent',
            x: 600,
            y: -90,
            z: 50,
            label: 'Upload Models',
            desc: 'Share your creations with our community. Upload your 3D models and reach thousands of potential buyers.',
            image: '/car-model.40128753.avif',
            tooltipPosition: 'left' as const
        },
        // bubble-6: Download 
        {
            icon: Download,
            color: 'text-cyan-600',
            gradient: 'from-white/70 to-cyan-50 dark:from-white/10 dark:to-transparent',
            x: -480,
            y: -120,
            z: 30,
            label: 'Downloads',
            desc: 'Access your purchased models anywhere, anytime.',
            tooltipPosition: 'top' as const
        },
        // bubble-7: LayoutGrid 
        {
            icon: LayoutGrid,
            color: 'text-orange-600',
            gradient: 'from-white/70 to-orange-50 dark:from-white/10 dark:to-transparent',
            x: 350,
            y: 50,
            z: 30,
            label: 'Categories',
            desc: 'Explore our organized collection by categories.',
            tooltipPosition: 'left' as const
        },
        // bubble-8: Star
        {
            icon: Star,
            color: 'text-yellow-600',
            gradient: 'from-white/70 to-yellow-50 dark:from-white/10 dark:to-transparent',
            x: -360,
            y: 80,
            z: 20,
            label: 'Featured Models',
            desc: 'Discover our handpicked selection of premium 3D models and assets from top creators.',
            tooltipPosition: 'right' as const,
            extraContent: (
                <div className="flex items-center gap-2 p-2 bg-indigo-50/50 rounded-md">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 border-2 border-white shadow-sm dark:border-neutral-700">
                        <img alt="Creator" loading="lazy" width="400" height="240" className="object-cover" src="/api/placeholder/400/320" />
                    </span>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium">Creator</span>
                        <div className="inline-flex gap-2 items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none border-slate-400 text-black hover:border-slate-500 text-xs bg-white">
                            Premium
                        </div>
                    </div>
                </div>
            )
        },
        // bubble-9: Layers 
        {
            icon: Layers,
            color: 'text-pink-600',
            gradient: 'from-white/70 to-pink-50 dark:from-white/10 dark:to-transparent',
            x: 90,
            y: 190,
            z: 30,
            label: 'Collections',
            desc: 'Curated sets of models for specific projects and needs.',
            tooltipPosition: 'bottom' as const
        },
        // bubble-10: Heart 
        {
            icon: Heart,
            color: 'text-red-600',
            gradient: 'from-white/70 to-red-50 dark:from-white/10 dark:to-transparent',
            x: -650,
            y: 30,
            z: 20,
            label: 'Favorites',
            desc: 'Save models you love for quick access later.',
            tooltipPosition: 'right' as const
        },
        // bubble-11: Headphones (Support) -
        {
            icon: Headphones,
            color: 'text-gray-600',
            gradient: 'from-white/70 to-gray-50 dark:from-white/10 dark:to-transparent',
            x: -120,
            y: 80,
            z: 10,
            label: 'Support',
            desc: 'Get help when you need it from our friendly support team.',
            tooltipPosition: 'right' as const
        },
    ]

    // Filter bubbles for mobile to match original (show exactly 5 bubbles like 3dimli.com)
    const getMobileBubbles = () => {
        // Return all bubbles during SSR to prevent hydration mismatch
        if (!isMounted) {
            return bubbles
        }

        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            // Mobile-specific bubble layout - EXACTLY matching 3dimli.com positions
            // Responsive positioning for all mobile screen sizes
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            // Enhanced scaling for better consistency across all mobile devices
            const baseWidth = 390; // Modern mobile baseline
            const baseHeight = 844; // Modern mobile baseline
            const widthScale = Math.min(screenWidth / baseWidth, 1.2);
            const heightScale = Math.min(screenHeight / baseHeight, 1.2);

            return [
                // Top left bubble (positioned around heading text)
                {
                    icon: Box,
                    color: 'text-indigo-600',
                    gradient: 'from-white/70 to-indigo-50 dark:from-white/10 dark:to-transparent',
                    x: -180 * widthScale,
                    y: -310 * heightScale,
                    z: 50,
                    label: '3D Models',
                    desc: 'Browse thousands of high-quality 3D models for your projects.',
                    tooltipPosition: 'top' as const
                },
                // Top right bubble (positioned around heading text)
                {
                    icon: ShoppingCart,
                    color: 'text-green-600',
                    gradient: 'from-white/70 to-blue-50 dark:from-white/10 dark:to-transparent',
                    x: 150 * widthScale,
                    y: -290 * heightScale,
                    z: 40,
                    label: 'Search',
                    desc: 'Find exactly what you need with our powerful search tools.',
                    tooltipPosition: 'top' as const
                },
                // Bottom left bubble (around button area)
                {
                    icon: Tag,
                    color: 'text-yellow-600',
                    gradient: 'from-white/70 to-yellow-50 dark:from-white/10 dark:to-transparent',
                    x: -160 * widthScale,
                    y: -10 * heightScale,
                    z: 20,
                    label: 'Featured Models',
                    desc: 'Discover our handpicked selection of premium models.',
                    tooltipPosition: 'bottom' as const
                },
                // Bottom center bubble (below button)
                {
                    icon: Users,
                    color: 'text-purple-600',
                    gradient: 'from-white/70 to-purple-50 dark:from-white/10 dark:to-transparent',
                    x: -10,
                    y: 50 * heightScale,
                    z: 30,
                    label: 'Collections',
                    desc: 'Curated sets of models for specific projects.',
                    tooltipPosition: 'bottom' as const
                },
                // Bottom right bubble (around button area)
                {
                    icon: Search,
                    color: 'text-orange-600',
                    gradient: 'from-white/70 to-orange-50 dark:from-white/10 dark:to-transparent',
                    x: 120 * widthScale,
                    y: -10 * heightScale,
                    z: 20,
                    label: 'Categories',
                    desc: 'Explore our organized collection by categories.',
                    tooltipPosition: 'bottom' as const
                }
            ]
        }
        return bubbles
    }
    return (
        <section
            className="relative w-full h-full"
            style={{ overflow: 'hidden', zIndex: 10, transition: 'opacity 0.3s ease-out' }}
            aria-label="Hero section with animated features"
        >
            {/* background gradient blur */}
            <div className="container absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0" aria-hidden="true">
                <span className="bg-[#ef233c] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full w-72"></span>
                <span className="-ml-20 bg-[#04868b] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply mt-40 nc-animation-delay-2000 opacity-10 rounded-full w-72"></span>
            </div>

            {/* Main content container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" role="main">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Typewriter heading */}
                    <motion.div
                        id="typewriterID"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{
                            y: isDesktop ? -scrollProgress * 50 : 0,
                            opacity: isDesktop ? 1 - scrollProgress : 1
                        }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    >
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[3.66em] font-bold leading-[1.15] sm:leading-[1.1] tracking-tight pb-6 sm:pb-8 text-[rgb(30,30,30)] dark:text-[rgb(230,230,230)] min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[180px] whitespace-pre-wrap ease-in-out px-2">
                            <TypeAnimation
                                sequence={[
                                    'Instant Payouts,\nFull Control, No Limits',
                                    3000,
                                    'Buy Once, Download\nAnytime, Keep Forever',
                                    3000,
                                    'Discover, Buy, and Sell\nDigital Products',
                                    3000,

                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    </motion.div>

                    <motion.div
                        id="homeParaID"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{
                            y: isDesktop ? -scrollProgress * 50 : 0,
                            opacity: isDesktop ? 1 - scrollProgress : 1
                        }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                    >
                        <div className="mx-auto mb-4 sm:mb-10 md:mb-16 px-4 text-center">
                            <p className="text-[10px] sm:text-sm md:text-lg leading-[1.4] text-[#0000008a] dark:text-neutral-400 font-normal sm:font-medium md:font-semibold">
                                Your one-stop digital platform for 3D models and digital creations.
                            </p>
                            <p className="text-[10px] sm:text-sm md:text-lg leading-[1.4] text-[#0000008a] dark:text-neutral-400 font-normal sm:font-medium md:font-semibold">
                                Join our community of creators and collectors today.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center relative"
                        id="exploreBtnID"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{
                            y: isDesktop ? -scrollProgress * 50 : 0,
                            opacity: isDesktop ? 1 - scrollProgress : 1
                        }}
                        transition={{ duration: 0.1, ease: 'linear' }}
                        style={{ pointerEvents: 'auto' }}
                    >
                        <a
                            href="/search?page=1"
                            className="h-auto absolute inline-flex items-center justify-center rounded-full transition-colors 
                            text-xs sm:text-sm md:text-base font-medium py-2.5 px-4 
                            sm:py-3 sm:px-5 md:py-3.5 md:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-neutral-50 
                            dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 
                            dark:hover:bg-neutral-800 w-40 sm:w-48 md:w-60 
                            overflow-hidden shine-infinite focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            aria-label="Explore all products - Browse our collection of 3D models and digital creations"
                        >
                            <span className="relative z-10">Explore all products</span>
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                        </a>

                        {/* Floating Bubbles */}
                        <div className="transition-opacity duration-1000 opacity-100">
                            {getMobileBubbles().map((bubble, index) => (
                                <FloatingBubble key={index} {...bubble} index={index} scrollProgress={scrollProgress} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
