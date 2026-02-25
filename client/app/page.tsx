"use client"
import CTA from "@/components/home/CTA"
import Features from "@/components/home/Feature"
import Footer from "@/components/home/Footer"
import Hero from "@/components/home/Hero"
import Navbar from "@/components/home/Navbar"
import Stats from "@/components/home/Stats"
import Testimonials from "@/components/home/Testimonal"
import LandingPage from "@/components/pmsmodel/page"
import { useState } from "react"

const page = () => {
  const [pmsOpen , setPmsOpen] = useState(false)
  return (
    
    <div>
      
      <Navbar />
      <Hero setPmsOpen={setPmsOpen} />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />   
      {pmsOpen && <LandingPage open={pmsOpen} />}
    </div>
    
  )
}

export default page
