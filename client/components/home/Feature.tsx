"use client"
import React from "react"
import { CreditCard, Shield, TrendingUp, ArrowRight } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <CreditCard size={28} />,
      title: "Smart Payments",
      desc: "Send and receive payments instantly anywhere in the world with zero hidden fees."
    },
    {
      icon: <Shield size={28} />,
      title: "Secure Banking",
      desc: "Your money is protected with multi-layer encryption and industry-leading security."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Grow Your Money",
      desc: "Invest and grow your savings with AI-driven smart tools and real-time insights."
    }
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">
            Our Edge
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Why forward-thinking <br /> 
            <span className="text-slate-400">users choose us</span>
          </h3>
        </div>
        <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
          We combine cutting-edge technology with human-centric design to simplify your financial life.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-100 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-100/50"
          >
            {/* Icon Container with Glow */}
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
              {feature.icon}
            </div>

            <h4 className="font-bold text-xl text-slate-900 mb-3">
              {feature.title}
            </h4>

            <p className="text-slate-600 leading-relaxed mb-6">
              {feature.desc}
            </p>

            {/* Subtle "Learn More" Link */}
            <button className="flex items-center gap-2 text-sm font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more <ArrowRight size={16} />
            </button>
            
            {/* Decorative accent for the card */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="w-12 h-12 rounded-full border-2 border-emerald-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features