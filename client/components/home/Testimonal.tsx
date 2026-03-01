"use client"
import React from "react"
import { Quote } from "lucide-react"

const Testimonials = () => {
  const data = [
    {
      name: "John Smith",
      role: "Financial Advisor",
      text: "This app completely changed how I manage my money. The interface is intuitive and the insights are genuinely helpful."
    },
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      text: "Secure, fast, and easy to use. I've tried many banking apps, but this one stands out for its reliability and speed."
    },
    {
      name: "David Lee",
      role: "Software Engineer",
      text: "The best banking experience I've ever had. The smart tools make investing feel like second nature."
    }
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
          Wall of Love
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          What our users <span className="text-slate-400 font-medium">are saying</span>
        </h3>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div 
            key={i} 
            className="group relative p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:bg-white hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500"
          >
            {/* Decorative Quote Icon */}
            <Quote className="text-emerald-200 mb-6 group-hover:text-emerald-500 transition-colors duration-500" size={32} />

            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                {/* Minimalist Avatar Placeholder */}
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
                  {item.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials