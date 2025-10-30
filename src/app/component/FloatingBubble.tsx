'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { useState, type ReactNode } from 'react'

type BubbleProps = {
    icon: LucideIcon
    color: string
    gradient: string
    x: number
    y: number
    z: number
    label: string
    desc: string
    image?: string
    index: number
    tooltipPosition?: 'top' | 'left' | 'right' | 'bottom'
    extraContent?: ReactNode
    scrollProgress?: number
}

export function FloatingBubble({
    icon: Icon,
    color,
    gradient,
    x,
    y,
    z,
    label,
    desc,
    image,
    index,
    tooltipPosition = 'top',
    extraContent,
    scrollProgress = 0
}: BubbleProps) {
    const [showTooltip, setShowTooltip] = useState(false)

    // Scale positions based on screen size for responsive layout
    const getScaledPosition = (pos: number) => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 768) {
                return pos * 0.35 // Mobile: 35% scale
            } else if (window.innerWidth < 1024) {
                return pos * 0.5 // Tablet: 50% scale
            }
        }
        return pos // Desktop: full scale
    }

    const scaledX = getScaledPosition(x)
    const scaledY = getScaledPosition(y)

    // Calculate when each bubble starts and ends its animation
    let bubbleStartProgress, bubbleEndProgress

    // Special timing for bottom bubbles (Heart & Headphones) - they move up instead of to center
    if (index === 10 || index === 11) {
        bubbleStartProgress = 0.5 + ((index - 10) * 0.1)
        bubbleEndProgress = bubbleStartProgress + 0.3
    } else {
        // Sequential timing: each bubble starts 8% later than the previous
        bubbleStartProgress = index * 0.08
        bubbleEndProgress = bubbleStartProgress + 0.25
    }

    // Normalize bubble's individual progress from 0 to 1
    const adjustedProgress = Math.max(0, Math.min(1,
        (scrollProgress - bubbleStartProgress) / (bubbleEndProgress - bubbleStartProgress)
    ))

    // Split animation into move (0-70%) and disappear (70-100%) phases for smooth transition
    const movePhase = Math.min(adjustedProgress / 0.7, 1)
    const disappearPhase = Math.max((adjustedProgress - 0.7) / 0.3, 0)

    let animatedX, animatedY
    // Heart & Headphones move upward, others collapse toward center
    if (index === 11 || index === 10) {
        animatedX = scaledX
        animatedY = scaledY - (adjustedProgress * 30) // Move up 30px
    } else {
        // Gradually reduce position to move toward center (0,0)
        animatedX = scaledX * (1 - movePhase * 0.1) * (1 - disappearPhase)
        animatedY = scaledY * (1 - movePhase * 0.1) * (1 - disappearPhase)
    }

    // Shrink bubble as it animates
    const animatedScale = 1 - (movePhase * 0.2) - (disappearPhase * 0.6)
    // Fade out bubble gradually
    const animatedOpacity = 1 - (movePhase * 0.25) - (disappearPhase * 0.75)

    const tooltipPositionClasses = {
        top: 'bottom-auto top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'left-auto right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'right-auto left-full top-1/2 transform -translate-y-1/2 ml-2',
        bottom: 'top-auto bottom-full left-1/2 transform -translate-x-1/2 mb-2'
    }

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 will-change-transform"
            style={{ zIndex: z }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
            animate={{
                x: animatedX,
                y: animatedY,
                opacity: animatedOpacity,
                scale: animatedScale
            }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
                x: { type: "spring", stiffness: 50, damping: 20 },
                y: { type: "spring", stiffness: 50, damping: 20 }
            }}
            onMouseEnter={() => adjustedProgress < 0.5 && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onFocus={() => adjustedProgress < 0.5 && setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            role="button"
            aria-label={`${label}: ${desc}`}
        >
            <div className="relative z-0">
                {/* The Bubble */}
                <div className={`
          bubble-item relative rounded-full backdrop-blur-lg
          bg-white/70 dark:bg-white/10
          shadow-[0px_2px_10px_rgba(0,0,0,0.1)]
          p-2 sm:p-3 md:p-3.5 
          flex items-center justify-center 
          cursor-grab
          border border-white/40 dark:border-white/10
          bg-linear-to-r ${gradient}
        `}
                    tabIndex={0}
                >
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 flex items-center justify-center">
                        <Icon className={`${color} w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6`} />
                    </div>
                </div>

                {/* Tooltip Card - Only shown when not scrolled */}
                {showTooltip && adjustedProgress < 0.5 && (
                    <div className={`absolute transition-all duration-500 ease-in-out opacity-100 scale-100 ${tooltipPositionClasses[tooltipPosition]}`}
                        style={{ zIndex: 9999 }}>
                        <div className="rounded-lg dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-600 text-card-foreground w-64 shadow-xl bg-white/95 border-indigo-400 border border-dashed">
                            {/* Header */}
                            <div className="flex flex-col space-y-1.5 p-6 pb-1 md:pb-2">
                                <h3 className="tracking-tight text-xs md:text-sm font-medium flex items-center gap-2">
                                    <span className="p-1 bg-indigo-50 rounded-full">
                                        <Icon className={color} size={16} />
                                    </span>
                                    {label}
                                </h3>
                            </div>

                            {/* Image (if exists) */}
                            {image && (
                                <div className="px-6 pt-0">
                                    <div className="mt-3 rounded-md overflow-hidden border border-indigo-50 dark:border-neutral-700">
                                        <img src={image} alt={label} className="w-full h-24 object-cover" />
                                    </div>
                                </div>
                            )}

                            {/* Description */}
                            <div className="p-6 pt-0">
                                <p className="text-xs leading-relaxed text-[#0000008a] dark:text-neutral-400">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    )
}