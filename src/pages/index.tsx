import Hero from "@/components/Hero";
import Section from "@/components/Section";

import BgOverview from '@/../public/bg-overview.jpeg'
import BgInterior from '@/../public/bg-interior.jpeg'
import BgCharging from '@/../public/bg-Charging.jpeg'
import BgConnectivity from '@/../public/bg-connectivity.jpeg'
import BgSafety from '@/../public/bg-safety.jpeg'

export default function Home() {
  return (
    <main className="min-h-screen">
     <Hero/>
     <Section image={BgOverview} tag='Overview'
     title='Elevate adventure in the luxury electric SUV of tomorrow.'
     description="More space. Moreutility - All luxury. Feel the freedom."/>
    </main>
  );
}
