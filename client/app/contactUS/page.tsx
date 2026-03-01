import React from 'react'
import Navbar from '@/components/home/Navbar'
import { ContactForm } from '@/components/shadcnForm/page'
import { CheckCircle2, MapPin, Mail, Phone, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const benefits = [
    "Improve usability of your financial products",
    "Engage users with AI-driven insights",
    "Reduce onboarding friction and improve conversion",
    "Balance security needs with seamless user experience"
  ]

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
            <span className="text-slate-400 font-medium italic">financial future.</span>
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

          {/* Right Column: Benefits & Offices (5 Cols) */}
          <div className="lg:col-span-5 space-y-12 lg:pl-10">
            
            {/* Value Proposition */}
            <div className="space-y-8">
              <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm italic">
                The Partnership Advantage
              </h3>
              <ul className="space-y-6">
                {benefits.map((text, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-md font-medium text-slate-700 leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Locations */}
            <div className="pt-10 border-t border-slate-100">
              <div className="flex items-center gap-3 font-black text-slate-900 uppercase tracking-widest text-sm mb-6">
                <MapPin className="w-4 h-4 text-emerald-600" /> Regional Headquarters
              </div>
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:border-emerald-100 transition-colors">
                <p className="font-bold text-slate-900">Lalitpur, Nepal</p>
                <p className="text-sm text-slate-500 leading-relaxed mt-2">
                  Labim Mall Road<br />
                  Strategic Wealth Center, 2nd Floor<br />
                  Bagmati Province
                </p>
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