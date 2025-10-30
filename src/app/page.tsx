'use client'

import Image from "next/image";
import { Hero } from "./component/Hero";
import { Navbar } from "./component/NavBar";
import { CTAPage } from "./component/CTAPage";

export default function Home() {

  return (
    <div>
      <Navbar />

      <main className="grow" id="app-wrapper">
        <div className="relative min-h-[10vh]">
          {/* Extended viewport height creates scroll space for hero animations */}
          <div className="relative h-[200vh] sm:h-[250vh] lg:h-[280vh]">
            {/* Sticky positioning keeps hero fixed while scrolling through extended container */}
            <div id="triggerID" className="sticky top-0 sm:top-[90px] h-screen">
              <Hero />
            </div>
          </div>

          {/* CTA appears after scrolling past hero section */}
          <div className="relative z-10">
            <CTAPage />
          </div>
        </div>
      </main>
    </div>
  );
}
