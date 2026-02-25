import Navbar from "@/components/home/Navbar"
import ServiceHero from "@/components/services/ServiceHero"
import PMSDetails from "@/components/services/PMSDetails"
import HowPMSWorks from "@/components/services/HowPMSWorks"
import WhyChoose from "@/components/services/WhyChoose"
import OurServices from "@/components/services/OurServices"
import PortfolioProcess from "@/components/services/PortfolioProcess"
import CTA from "@/components/home/CTA"
import Footer from "@/components/home/Footer"

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServiceHero/>
      <PMSDetails />
      <HowPMSWorks />
      <WhyChoose />
      <OurServices />
      <PortfolioProcess />
      <CTA />
      <Footer />
    </>
  )
}