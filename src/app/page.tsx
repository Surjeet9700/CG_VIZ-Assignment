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
          <div className="relative h-fit lg:h-[280vh]">
            <div id="triggerID" className="md:sticky md:top-[90px] h-[92vh] md:h-screen">
              <Hero />
            </div>
          </div>

          <div className="relative z-10">
            <CTAPage />
          </div>
        </div>
      </main>
    </div>
  );
}
