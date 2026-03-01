"use client";

import { useSelector } from "react-redux";
import { ChartBarNegative } from "@/components/portfolioChart/page"; // Reusing your chart component
import { ArrowUpRight, Bell, Search, Settings, CreditCard, Activity, PieChart, Loader2 } from "lucide-react";
import { useState } from "react";
import { RootState } from "@/redux/store";

const PlatinumPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  
  // Pull user data from Redux
  const user = useSelector((state: RootState) => state.auth.user);
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "P";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* Institutional Navigation */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white sticky top-0 z-50 border-b border-slate-200">
        <div className="flex items-center space-x-6">
          <div className="relative group">
            {/* Platinum Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-slate-400 to-indigo-400 rounded-full opacity-10 group-hover:opacity-30 transition duration-500"></div>
            
            {user?.profilePic ? (
              <img
                className="relative w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                src={user.profilePic}
                alt={user.name}
              />
            ) : (
              <div className="relative w-12 h-12 rounded-full border-2 border-white bg-indigo-800 flex items-center justify-center text-indigo-300 font-black text-xl">
                {userInitial}
              </div>
            )}
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-indigo-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h1 className="font-bold text-gray-500 text-lg tracking-tight leading-none">
              {user?.name || "Platinum Member"}
            </h1>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1 inline-block">
              Institutional Tier
            </span>
          </div>
        </div>

        <ul className="hidden lg:flex items-center space-x-8 text-[12px] font-bold uppercase tracking-widest text-slate-400">
          <li className="cursor-pointer text-indigo-600 border-b-2 border-indigo-600 pb-1 transition-all">Overview</li>
          <li className="cursor-pointer hover:text-slate-900 transition-colors">Statements</li>
          <li className="cursor-pointer hover:text-slate-900 transition-colors">Transfers</li>
        </ul>

        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-slate-100 rounded-xl px-3 py-1.5 border border-slate-200">
            {showSearch && (
              <input 
                autoFocus
                type="text" 
                className="bg-transparent px-2 text-sm outline-none w-32 text-slate-900 placeholder:text-slate-400" 
                placeholder="Search..." 
              />
            )}
            <Search size={16} className="text-slate-400 cursor-pointer" onClick={() => setShowSearch(!showSearch)} />
          </div>
          <button className="p-2.5 text-slate-400 hover:text-indigo-600 transition-all">
            <Bell size={20} />
          </button>
        </div>
      </nav>

      {/* Dashboard Grid */}
      <main className="max-w-[1400px] mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Market Performance */}
        <div className="lg:col-span-9 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Stat Cards */}
            {[
              { label: "Equity Value", val: "$842,120", icon: <PieChart size={20}/>, color: "text-indigo-600" },
              { label: "Cash Balance", val: "$124,000", icon: <CreditCard size={20}/>, color: "text-slate-600" },
              { label: "Market Trend", val: "+4.2%", icon: <Activity size={20}/>, color: "text-emerald-600" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${item.color} mb-3`}>{item.icon}</div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.label}</p>
                <h4 className="text-2xl font-black text-slate-900 mt-2 tracking-tight">{item.val}</h4>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Performance Index</h2>
              <select className="bg-slate-50 border-none text-xs font-bold p-2 rounded-lg outline-none text-slate-500 cursor-pointer">
                <option>Last 30 Days</option>
                <option>Year to Date</option>
              </select>
            </div>
            <div className="h-[400px]">
              <ChartBarNegative />
            </div>
          </div>
        </div>

        {/* Right: Actions & Activity */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-indigo-600 p-8 rounded-[2rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Total Portfolio</p>
              <h3 className="text-3xl font-black mt-2 mb-6 tracking-tighter">$966,120.00</h3>
              <button className="w-full bg-white text-indigo-600 font-black py-4 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm">
                Generate Report <ArrowUpRight size={18} />
              </button>
            </div>
            {/* Abstract Background Shape */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-6">
            <h5 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-6 px-2">Recent Transactions</h5>
            <div className="space-y-6">
              {[
                { name: "AAPL Dividend", date: "Oct 24", amt: "+$420.00", pos: true },
                { name: "Portfolio Rebalance", date: "Oct 22", amt: "-$1,200.00", pos: false },
                { name: "Wire Transfer", date: "Oct 20", amt: "+$5,000.00", pos: true }
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center px-2 group cursor-default">
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{tx.name}</p>
                    <p className="text-[10px] font-medium text-slate-400">{tx.date}</p>
                  </div>
                  <span className={`text-xs font-black ${tx.pos ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {tx.amt}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors pt-4 border-t border-slate-50">
              View Full Ledger
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PlatinumPage;