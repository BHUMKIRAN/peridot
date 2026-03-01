import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center pt-40 pb-24 px-6 overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent -z-10" />

      <div className="flex flex-col items-center max-w-4xl space-y-8">
        
        {/* Trust Badge */}
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100 animate-fade-in">
        
          Bank-Level Security Guaranteed
        </div>

        {/* Main Heading Group */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Building a Secure
          </h1>
          <h2 className="text-5xl md:text-8xl font-extrabold text-emerald-600 tracking-tight leading-[1.05]">
            Financial Future
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          Visualize, protect, and transfer your wealth <br className="hidden md:block" /> 
          seamlessly with the world's most trusted financial tools.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button className="h-16 bg-white hover:bg-slate-50 text-black px-10 rounded-full text-lg font-bold transition-all shadow-xl shadow-slate-200 flex items-center gap-2 group active:scale-95">
            Start Planning
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="h-16 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-10 rounded-full text-lg font-bold transition-all active:scale-95">
            View Solutions
          </button>
        </div>

        {/* Social Proof Text */}
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pt-8">
          Trusted by over 10,000+ global investors
        </p>
      </div>
    </section>
  )
}

export default Hero