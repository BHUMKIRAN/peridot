"use client";

import { useSelector } from "react-redux";
import { ChartBarNegative } from "@/components/portfolioChart/page";
import { 
  ArrowUpRight, Bell, Search, Settings, TrendingUp, 
  Zap, Crown, Globe, ShieldCheck, ChevronRight, Plus
} from "lucide-react";
import { useState } from "react";
import { RootState } from "@/redux/store";

const DiamondPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "D";

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* Subtle background texture/glows (light mode) */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-emerald-50/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Ultra-Clean Navigation */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100/60">
        <div className="flex items-center space-x-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-400 to-emerald-600 rounded-full opacity-20 group-hover:opacity-40 transition duration-500" />
            {user?.profilePic ? (
              <img
                className="relative w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm cursor-pointer"
                src={user.profilePic}
                alt={user.name}
              />
            ) : (
              <div className="relative w-14 h-14 rounded-full border-4 border-white bg-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-sm">
                {userInitial}
              </div>
            )}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-black text-slate-900 text-xl tracking-tighter leading-none">
                {user?.name || "Private Client"}
              </h1>
              <div className="bg-emerald-50 p-1 rounded-md">
                <Crown size={12} className="text-emerald-600" />
              </div>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1 inline-block">
              Diamond Tier Member
            </span>
          </div>
        </div>

        <ul className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          <li className="cursor-pointer text-slate-900 border-b-2 border-emerald-500 pb-1">Portfolio</li>
          <li className="cursor-pointer hover:text-emerald-600 transition-colors">Global Assets</li>
          <li className="cursor-pointer hover:text-emerald-600 transition-colors">Tax Hub</li>
          <li className="cursor-pointer hover:text-emerald-600 transition-colors">Concierge</li>
        </ul>

        <div className="flex items-center space-x-6">
          <div className={`flex items-center bg-slate-50 border border-slate-100 rounded-full px-4 py-2 transition-all ${showSearch ? 'w-64' : 'w-12'} overflow-hidden`}>
            <Search size={18} className="text-slate-400 shrink-0 cursor-pointer" onClick={() => setShowSearch(!showSearch)} />
            <input 
              type="text" 
              placeholder="Search Private Markets..." 
              className="bg-transparent border-none outline-none ml-3 text-sm w-full placeholder:text-slate-300" 
            />
          </div>
          <button className="relative p-3 bg-white text-slate-400 rounded-full hover:shadow-lg hover:text-emerald-600 transition-all border border-slate-100">
            <Bell size={20} />
            <span className="absolute top-3 right-3 h-2 w-2 bg-emerald-500 rounded-full border-2 border-white" /> 
          </button>
        </div>
      </nav>

      <main className="max-w-[1500px] mx-auto p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Intelligence Analytics */}
        <div className="lg:col-span-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-3">
              <h2 className="text-5xl font-black text-slate-900 tracking-tighter flex items-center gap-4">
                Wealth Intelligence <TrendingUp className="text-emerald-500" size={40}/>
              </h2>
              <p className="text-slate-400 font-medium text-lg italic">Exclusively curated for your {user?.name?.split(' ')[0] || "portfolio"}.</p>
            </div>
            
            <div className="inline-flex p-1 bg-slate-100/50 border border-slate-100 rounded-2xl">
              {['Live', 'Weekly', 'Monthly', 'Yearly'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                    tab === 'Live' ? 'bg-white text-slate-900 shadow-sm border border-slate-100' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Premium White Glass Chart Container */}
          <div className="bg-white border border-slate-100 p-10 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                   <Globe size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Market Capture</p>
                  <p className="text-lg font-bold text-slate-900">Global Equities Index</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors">
                <Plus size={14} /> Add Asset
              </button>
            </div>
            <div className="h-[480px]">
              <ChartBarNegative />
            </div>
          </div>
        </div>

        {/* Right: Asset Management */}
        <aside className="lg:col-span-4 space-y-10">
          
          {/* Large Clean Balance Card */}
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-[5rem] -mr-10 -mt-10 blur-2xl group-hover:bg-emerald-100/50 transition-colors" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex justify-between items-center">
                <div className="p-4 bg-white text-emerald-400 rounded-3xl">
                  <ShieldCheck size={32} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Account Status</p>
                  <p className="text-xs font-bold text-emerald-600">Verified Diamond</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Total Net Worth</p>
                <h3 className="text-6xl font-black text-slate-900 tracking-tighter">
                  $4.82M
                </h3>
                <div className="flex items-center gap-2 pt-3">
                   <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">+14.2% Growth</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98]">
                  Withdraw
                </button>
                <button className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-black py-5 rounded-2xl transition-all border border-slate-100">
                  Deposit
                </button>
              </div>
            </div>
          </div>

          {/* Minimalist Insight Card */}
          <div className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-slate-100/60 space-y-6">
            <div className="flex items-center gap-3 text-emerald-600">
               <Zap size={20} fill="currentColor" />
               <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Alpha AI Signal</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Portfolio exposure to <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Sustainable Energy</span> is increasing. Your ROI is projected to rise by 2.1% in Q4.
            </p>
            <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
              View Analysis <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </aside>
      </main>
    </div>
  );
};

export default DiamondPage;