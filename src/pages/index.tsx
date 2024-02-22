import Hero from "@/components/Hero";
import Section from "@/components/Section";

import BgOverview from '@/../public/bg-overview.jpeg'
import BgInterior from '@/../public/bg-interior.jpeg'
import BgCharging from '@/../public/bg-charging.jpeg'
import BgConnectivity from '@/../public/bg-connectivity.jpeg'
import BgSafety from '@/../public/bg-safety.jpeg'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(()=> {
    const lenis = new Lenis()
    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  },{})
  return (
    <main className="min-h-screen">
     <Hero/>
     <Section image={BgOverview} tag='Overview'
     title='Elevate adventure in the luxury electric SUV of tomorrow.'
     description="More space. Moreutility - All luxury. Feel the freedom."/>
     <Section image={BgInterior} tag='Interior'
     title='Interior space. Superior taste'
     description="More space. Moreutility - All luxury. Feel the freedom."/>
     <Section image={BgCharging} tag='Charging'
     title='Long-distances in lightning speed.'
     description="More space. Moreutility - All luxury. Feel the freedom."/>
     <Section image={BgConnectivity} tag='Connectivity'
     title='Feel the world at your fingertips.'
     description="More space. Moreutility - All luxury. Feel the freedom."/>
     <Section image={BgSafety} tag='Safety'
     title='Designed for peace of mind'
     description="More space. Moreutility - All luxury. Feel the freedom."/>
    </main>
  );
}
