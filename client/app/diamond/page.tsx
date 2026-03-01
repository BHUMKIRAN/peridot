"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { ChartBarNegative } from "@/components/portfolioChart/page";
import { ArrowDownRight, ArrowUpRight, Bell, Search, Settings, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DiamondPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  
  // 1. Pull user data from Redux
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  // 2. Logic for Avatar Fallback
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100">
      {/* Premium Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100">
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            {/* User Profile Image or Initial Fallback */}
            {user?.profilePic ? (
              <img
                className="relative w-12 h-12 rounded-full border-2 border-white object-cover cursor-pointer transition-all"
                src={user.profilePic}
                alt={user.name || "Profile"}
              />
            ) : (
              <div className="relative w-12 h-12 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-emerald-500 font-black text-xl cursor-pointer">
                {userInitial}
              </div>
            )}
            
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="hidden sm:block">
            {/* Dynamic User Name */}
            <h1 className="font-black text-slate-900 text-lg tracking-tight leading-none">
              {user?.name || "Guest User"}
            </h1>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mt-1 inline-block">
              {user?.role === 'admin' ? 'Institutional Admin' : 'Private Client'}
            </span>
          </div>
        </div>

        <ul className="hidden lg:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-slate-400">
          <li className="cursor-pointer text-slate-900 border-b-2 border-emerald-500 pb-1">Portfolio</li>
          <li className="cursor-pointer hover:text-slate-900 transition-colors">Watchlist</li>
          <li className="cursor-pointer hover:text-slate-900 transition-colors">Marketplace</li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-slate-50 rounded-full px-2 py-1 border border-slate-100">
            {showSearch && (
              <input 
                autoFocus
                type="text" 
                className="bg-transparent px-3 py-1 text-sm outline-none w-40 transition-all placeholder:text-slate-400 text-slate-900" 
                placeholder="Search assets..." 
              />
            )}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:text-emerald-600 transition-colors text-slate-600"
            >
              <Search size={18} />
            </button>
          </div>
          
          <button className="relative p-2.5 bg-slate-50 text-slate-600 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-slate-100">
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-emerald-500 rounded-full border-2 border-white" /> 
          </button>
        </div>
      </nav>

      {/* Main Dashboard Layout */}
      <main className="max-w-[1400px] mx-auto p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Analytics (8 Cols) */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-3">
                Analytics Hub <TrendingUp className="text-emerald-500" size={32}/>
              </h2>
              <p className="text-slate-500 font-medium">
                Welcome back, {user?.name?.split(' ')[0] || 'Investor'}. Your portfolio is healthy.
              </p>
            </div>
            
            <div className="inline-flex p-1.5 bg-slate-50 border border-slate-100 rounded-2xl">
              {['Daily', 'Weekly', 'Monthly'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${
                    tab === 'Weekly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-[3rem] aspect-video md:aspect-auto md:h-[500px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live Market
              </div>
            </div>
            <ChartBarNegative />
          </div>
        </div>

        {/* Right Column: Financial Cards (4 Cols) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Main Balance Card */}
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40 relative group overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl group-hover:bg-emerald-100 transition-colors" />
            
            <div className="relative z-10 space-y-10">
              <div className="flex justify-between items-center">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-[1.5rem]">
                  <ArrowDownRight size={28} />
                </div>
                <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                  <Settings size={20} />
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Net Worth</p>
                <h3 className="text-5xl font-black text-slate-900 tracking-tighter">
                  $1,235,543
                </h3>
                <div className="flex items-center gap-2 pt-2">
                   <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">+12.5%</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">vs last month</span>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50">
                <div className="flex items-center justify-between group/item cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-900 text-white rounded-2xl">
                      <ArrowUpRight size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Monthly Outflow</p>
                      <p className="text-xl font-bold text-slate-900 mt-1">$412,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Insight Card */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Zap className="text-emerald-400" size={40} />
            </div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400 mb-3">Smart Insight</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Your tech cluster is outperforming the S&P 500 by <span className="text-white font-bold">18.4%</span>. Consider rebalancing your energy stakes.
            </p>
            <button className="mt-6 text-xs font-black uppercase tracking-widest text-white border-b border-emerald-500 pb-1 hover:text-emerald-400 transition-colors">
              Rebalance Now →
            </button>
          </div>

        </aside>
      </main>
    </div>
  );
};

export default DiamondPage;
