'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export function CTAPage() {
    return (
        <section className="container h-fit md:h-[85vh] px-4 sm:px-6 z-40 5xl:h-[80vh] overflow-hidden md:top-0 grid place-items-center transition-opacity duration-700 opacity-100 py-12 md:py-0" aria-label="Call to action section">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-4 w-full">

                {/* Left Content Section */}
                <div className="flex gap-4 sm:gap-6 flex-col items-center md:items-start text-center md:text-left">

                    {/* Meet 3DIMLI */}
                    <motion.h2
                        className="text-sm sm:text-xl md:text-2xl text-white"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Meet 3DIMLI
                    </motion.h2>

                    {/* Main Title */}
                    <motion.h2
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-medium text-white leading-tight"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="inline-block mr-2">Your</span>
                        <span className="inline-block mr-2">All-in-one</span>
                        <span className="inline-block mr-2">Digital</span>
                        <span className="inline-block mr-2">Commerce</span>
                        <span className="inline-block mr-2">Platform</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="font-semibold text-white">Sell 3D Models, E-books, and digital products</span> effortlessly. Manage your store, deliver products seamlessly, and reach a global audience.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.a
                        href="/login"
                        className="flex items-center justify-center rounded-full text-xs sm:text-sm md:text-base font-medium py-2.5 px-4 sm:py-3 sm:px-6 bg-transparent hover:bg-neutral-900 text-neutral-100 w-40 sm:w-48 md:w-60 overflow-hidden shine-infinite transition-all duration-300 border border-neutral-50-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label="Start selling your digital products now"
                    >
                        Start Selling Now
                        <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                    </motion.a>
                </div>

                {/* Right Video Section */}
                <motion.div
                    className="relative w-full overflow-hidden rounded-l-full"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <video
                        width="100%"
                        height="100%"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Meet-3DIMLI/3DIMLI-Creators.avif"
                    >
                        <source
                            src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Meet-3DIMLI/3DIMLI-Creators.webm"
                            type="video/webm"
                        />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                {/* Benefits Section */}
                <div className="col-span-1 md:col-span-2 md:mt-16 h-fit flex flex-col items-center w-full perspective">
                    <div className="w-full mx-auto overflow-hidden">
                        <div className="flex flex-row w-full">

                            {/* Benefit 1 - Global */}
                            <motion.div
                                className="flex-1 flex flex-col items-center text-center p-1 sm:p-2 md:p-9 relative overflow-hidden"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 left-0 bg-linear-to-r from-transparent via-blue-100/30 to-transparent dark:via-blue-900/10 -translate-x-full animate-shine-infinte"></div>
                                <h3 className="text-[18.75px] sm:text-[30px] md:text-5xl font-medium text-white">
                                    Global
                                </h3>
                                <p className="text-[#FF6B35] dark:text-[#FF8A5B] text-[10px] sm:text-base">
                                    For creators worldwide.
                                </p>
                            </motion.div>

                            {/* Divider 1 */}
                            <div className="flex items-center">
                                <motion.div
                                    className="w-px bg-neutral-200 dark:bg-neutral-700 h-[60%] my-auto origin-top"
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </div>

                            {/* Benefit 2 - Earnings */}
                            <motion.div
                                className="flex-1 flex flex-col items-center text-center p-1 sm:p-2 md:p-9 relative overflow-hidden"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-orange-100/30 to-transparent dark:via-orange-900/10 -translate-x-full animate-shine-infinite"></div>
                                <h3 className="text-[18.75px] sm:text-[30px] md:text-5xl font-medium text-white">
                                    Earnings
                                </h3>
                                <p className="text-[#FF6B35] dark:text-[#FF8A5B] text-[10px] sm:text-base">
                                    Keep 100% of what you earn.
                                </p>
                            </motion.div>

                            {/* Divider 2 */}
                            <div className="flex items-center">
                                <motion.div
                                    className="w-px bg-neutral-200 dark:bg-neutral-700 h-[60%] my-auto origin-top"
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    viewport={{ once: true }}
                                />
                            </div>

                            {/* Benefit 3 - Support */}
                            <motion.div
                                className="flex-1 flex flex-col items-center text-center p-1 sm:p-2 md:p-9 relative overflow-hidden"
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-100/30 to-transparent dark:via-green-900/10 -translate-x-full animate-shine-infinite" style={{ animationDelay: '2.2s' }}></div>
                                <h3 className="text-[18.75px] sm:text-[30px] md:text-5xl font-medium text-white">
                                    Support
                                </h3>
                                <p className="text-[#FF6B35] dark:text-[#FF8A5B] text-[10px] sm:text-base">
                                    We've got your back.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}