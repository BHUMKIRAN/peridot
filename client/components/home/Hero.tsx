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
                  className={`text-2xl transition-transform hover:scale-110 ${rating >= star ? "text-amber-400" : "text-slate-200"
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

      {/* Right Content: Statistics Dashboard */}
      <div className="relative h-[500px] flex items-center justify-center">
        {/* Decorative Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-200/30 blur-[120px] rounded-full -z-10"></div>

        {/* Main Stats Card */}
        <div className="absolute top-0 right-0 w-full max-w-[340px] bg-white rounded-3xl shadow-2xl shadow-emerald-100 p-6 border border-slate-50 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="flex justify-between items-center mb-6">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Inventory</span>
            <span className="bg-emerald-100 text-emerald-600 text-[10px] px-2 py-1 rounded-full font-bold">+12.5%</span>
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-4">$42,650.00</h3>

          {/* Simple SVG Sparkline (The Graph) */}
          <svg viewBox="0 0 100 30" className="w-full h-16 text-emerald-500 drop-shadow-md">
            <path
              d="M0 25 Q 10 25, 20 15 T 40 18 T 60 5 T 80 12 T 100 2"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Secondary Card: Savings Goal */}
        <div className="absolute bottom-8 left-0 w-64 bg-white rounded-2xl p-5 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-xl">🏠</div>
            <div>
              <p className="text-black text-sm font-bold">New Home Fund</p>
              <p className="text-slate-400 text-[10px]">85% of $50,000</p>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-emerald-500"></div>
          </div>
        </div>

        {/* Small Floating Action Card */}
        <div className="absolute top-1/2 -left-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">💰</div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium">Income Received</p>
            <p className="text-xs font-bold text-slate-900">+$2,400.00</p>
          </div>
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