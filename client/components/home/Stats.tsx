"use client"
import React from "react"

const Stats = () => {
  const stats = [
    { value: "10M+", label: "Active Users" },
    { value: "$50B+", label: "Transactions" },
    { value: "99.9%", label: "Uptime Rate" },
    { value: "24/7", label: "Expert Support" }
  ]

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto border border-slate-100 rounded-[2.5rem] bg-slate-50/40 p-12 md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center">
          
          {stats.map((stat, i) => (
            <div key={i} className="relative group">
              {/* Subtle Vertical Divider for Desktop */}
              {i !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200" />
              )}
              
              <div className="space-y-2 transition-transform duration-300 group-hover:-translate-y-1">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  <span className="text-emerald-600 transition-colors duration-300 group-hover:text-emerald-500">
                    {stat.value.split('').map((char, index) => 
                      isNaN(parseInt(char)) && char !== '.' ? <span key={index} className="text-2xl ml-0.5">{char}</span> : char
                    )}
                  </span>
                </h2>
                
                <p className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Stats