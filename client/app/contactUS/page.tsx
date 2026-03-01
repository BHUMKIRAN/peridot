import React from 'react'
import Navbar from '@/components/home/Navbar'
import { ContactForm } from '@/components/shadcnForm/page'
import { MapPin, Mail, Phone, } from 'lucide-react'

export default function ContactPage() {


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1 container mx-auto px-8 py-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">
            Connect with us
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
            Let’s build your <br />
            financial future.
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a question about features, pricing, or secure scaling, our team is ready to answer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto items-start">

          {/* Left Column: Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-sm">
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
              <p className="text-sm text-slate-500">Expect a response within 24 business hours.</p>
            </div>
            <ContactForm />
          </div>
          {/* Right Column: Office Locations (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start lg:pl-10 pt-10 lg:pt-0">
            {/* Added flex-col and items-center for mobile centering, lg:items-start for desktop alignment */}

            <div className="w-full max-w-sm"> {/* Wrapper to control the width of the content */}

              <div className="flex items-center justify-center lg:justify-start gap-3 font-black text-slate-900 uppercase tracking-widest text-sm mb-8">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Regional Headquarters
              </div>

              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:border-emerald-100 transition-all duration-300 shadow-sm hover:shadow-md">
                <p className="font-bold text-xl text-slate-900 mb-3">Lalitpur, Nepal</p>
                <div className="space-y-1">
                  <p className="text-slate-500 leading-relaxed">Labim Mall Road</p>
                  <p className="text-slate-500 leading-relaxed">Peridot, 2nd Floor</p>
                  <p className="text-slate-500 leading-relaxed font-medium text-emerald-600">Bagmati Province</p>
                </div>

                {/* Optional: Add a "View on Map" link to fill space nicely */}
                <div className="mt-6 pt-6 border-t border-slate-200/60">
                  <a href="#" className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-wider">
                    Get Directions →
                  </a>
                </div>
              </div>

            </div>
          </div>
          </div>
          {/* Floating Footer Contact Info */}
          <div className="max-w-7xl mx-auto mt-24">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-black text-2xl font-bold">Still have questions?</h4>
                <p className="text-slate-400">Reach out through our direct channels.</p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:contact.ABC@gmail.com" className="flex items-center gap-4 bg-black/5 border border-black/10 px-6 py-4 rounded-2xl hover:bg-emerald-600 transition-all group">
                  <Mail className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  <span className="text-black font-medium">contact.ABC@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 bg-black/5 border border-black/10 px-6 py-4 rounded-2xl hover:bg-emerald-600 transition-all group cursor-pointer">
                  <Phone className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                  <span className="text-black font-medium">+977 9812345678</span>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}