"use client";

import React, { useState } from "react";
import LandingPage from "../pmsmodel/page";

interface HeroProps {
  setPmsOpen: (value: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setPmsOpen }) => {
  const [rating, setRating] = useState(4); // Default to 4 for better visual "social proof"

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
            Try it now
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
            Change the way <br /> 
            <span className="text-emerald-600">you use your</span> <br /> 
            money
          </h1>
          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            From your everyday spending to planning for your future with savings
            and investments.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-200 transition-all active:scale-95">
            Get started
          </button>
          
          {/* Enhanced Rating System */}
          <div className="flex flex-col gap-1">
             <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl transition-transform hover:scale-110 ${
                        rating >= star ? "text-amber-400" : "text-slate-200"
                    }`}
                    >
                    ★
                    </button>
                ))}
                <span className="ml-3 font-bold text-slate-900">{rating}.0</span>
            </div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Trusted by 10k+ users</p>
          </div>
        </div>
      </div>

      {/* Right Image Grid */}
      <div className="relative">
        {/* Decorative background element */}
        <div className="absolute -inset-4 bg-emerald-50 rounded-3xl -z-10 transform rotate-2"></div>
        
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <img src="/photos/p1.jpg" alt="App Preview 1" className="w-full h-full object-cover rounded-2xl shadow-sm border border-white hover:scale-[1.02] transition-transform duration-500" />
          <img src="/photos/3.jpg" alt="App Preview 2" className="w-full h-full object-cover rounded-2xl shadow-sm border border-white mt-8 hover:scale-[1.02] transition-transform duration-500" />
          <img src="/photos/4.jpg" alt="App Preview 3" className="w-full h-full object-cover rounded-2xl shadow-sm border border-white -mt-8 hover:scale-[1.02] transition-transform duration-500" />
          <img src="/photos/5.jpg" alt="App Preview 4" className="w-full h-full object-cover rounded-2xl shadow-sm border border-white hover:scale-[1.02] transition-transform duration-500" />
        </div>
      </div>

      {/* Full Width Modal/Section */}
      <div className="lg:col-span-2 pt-12">
        <LandingPage open={true} />
      </div>
    </section>
  );
};

export default Hero;