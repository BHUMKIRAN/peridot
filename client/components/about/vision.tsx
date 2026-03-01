import React from 'react'
import { CheckCircle2, Target } from 'lucide-react'

const Vision = () => {
  const highlights = [
    "Bank-level security protocols",
    "Real-time financial insights",
    "Modern intuitive interface",
    "Secure wealth tracking",
    "Trusted by 10k+ global users"
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Mission Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <Target size={18} /> Our Vision
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Revolutionizing the <br />
              <span className="text-slate-400 font-medium text-3xl md:text-4xl">future of finance.</span>
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-emerald-500 pl-6 py-2">
              Our vision is to create secure, intelligent, and user-friendly platforms 
              that empower individuals and businesses worldwide to take control of their wealth.
            </p>
            <p className="text-slate-500 leading-relaxed max-w-md">
              We aim to make wealth management transparent, accessible, and efficient 
              through cutting-edge technology and human-centric innovation.
            </p>
          </div>
        </div>

        {/* Right Side: Why Choose Us Card */}
        <div className="relative">
          {/* Decorative blur element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 blur-3xl rounded-full -z-10 opacity-60" />
          
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-emerald-900/10 relative">
            <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
              Why Forward-Thinkers <br /> Choose Us
            </h3>

            <ul className="space-y-5">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group transition-all">
                  <div className="bg-emerald-500/10 p-1 rounded-full text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-black transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Subtle "Trust" watermark or detail */}
            <div className="mt-10 pt-6 border-t border-slate-800">
               <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">
                 Global Compliance Standard 2026
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Vision
