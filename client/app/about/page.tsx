'use client'

import Navbar from '@/components/home/Navbar'
import Hero from '@/components/about/hero'
import Stats from '@/components/about/stats'
import Contact from '@/components/about/contact'
import Team from '@/components/about/team'
import Vision from '@/components/about/vision'
export default function AboutPage() {



    return (
        <div className="min-h-screen bg-white text-gray-800">

            <Navbar />
            <Hero />
            <Vision />
            <Team />
            <Stats />
            <Contact />
            {/* FOOTER */}
            <div className="text-center py-8 text-gray-500">
                © 2026 Financial Platform. All rights reserved.
            </div>
        </div>
    )
}
