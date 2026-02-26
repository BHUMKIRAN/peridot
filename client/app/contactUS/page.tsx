import React from 'react'
import Navbar from '@/components/home/Navbar'
import { ContactForm } from '@/components/shadcnForm/page'
import { CheckCircle2, MapPin, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const benefits = [
    "Improve usability of your product",
    "Engage users at a higher level and outperform your competition",
    "Reduce the onboarding time and improve sales",
    "Balance user needs with your business goal"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[10px] font-bold tracking-widest uppercase mb-4">Contact Us</p>
          <h1 className="text-5xl font-bold mb-6">Get in touch with us</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Right Column: Benefits & Offices */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="font-bold text-lg">With our services you can</h3>
              <ul className="space-y-4">
                {benefits.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-black" />
                    <span className="text-sm text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offices */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold">
                  <MapPin className="w-4 h-4" /> Nepal
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  lambin mall road<br />2nd floor<br />Lalitpur
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="max-w-6xl mx-auto mt-20 pt-10 border-t">
          <h4 className="font-bold mb-6">You can also Contact Us via</h4>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">contact.ABC@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">+997 9812345678</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}