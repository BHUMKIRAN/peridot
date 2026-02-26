"use client";
import { ChartBarNegative } from "@/components/portfolioChart/page";
import { ArrowDown, ArrowUp, Bell, Search, Settings, TrendingUp } from "lucide-react";
import { useState } from "react";

const DiamondPage = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-[#03314b] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <img
              className="w-11 h-11 rounded-full border-2 border-emerald-500 p-0.5 object-cover cursor-pointer transition-transform group-hover:scale-105"
              src="https://i.pinimg.com/564x/5a/7b/c9/5a7bc9ee8614eef19ae0caf54f24af30.jpg"
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none">Alex Julia</h1>
            <span className="text-xs text-gray-500 font-medium">Premium Plan</span>
          </div>
        </div>

        <ul className="hidden md:flex space-x-8 font-semibold text-gray-600">
          <li className="cursor-pointer hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all">
            Watchlist
          </li>
          <li className="cursor-pointer hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all">
            Stock Activity
          </li>
        </ul>

        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            {showSearch && (
              <input 
                autoFocus
                type="text" 
                className="rounded-full border border-gray-200 focus:ring-2 focus:ring-emerald-100 focus:border-emerald-400 px-4 py-1.5 text-sm outline-none transition-all w-48 mr-2" 
                placeholder="Search stocks..." 
              />
            )}
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search size={20} className="text-gray-600" />
            </button>
          </div>
          
          <div className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" /> 
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Chart Section - Spans 2 columns */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Portfolio Growth <TrendingUp size={20} className="text-emerald-500"/>
            </h2>
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button className="px-4 py-1.5 text-sm font-medium rounded-lg bg-white shadow-sm">Weekly</button>
              <button className="px-4 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700">Daily</button>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ChartBarNegative />
          </div>
        </div>

        {/* Right Sidebar - Financials */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
                <ArrowDown className="rotate-135" size={24} />
              </div>
              <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-emerald-600 transition-colors uppercase tracking-wider">
                <Settings size={16}/>
                Manage
              </button>
            </div>
            
            <div className="space-y-1 mb-8">
              <p className="text-gray-500 font-medium">Total Income</p>
              <h1 className="text-4xl font-bold tracking-tight">$1,235,543</h1>
              <p className="text-emerald-500 text-sm font-semibold">+12.5% from last month</p>
            </div>

            <hr className="border-gray-100 mb-6" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-rose-100 text-rose-600 rounded-2xl">
                  <ArrowUp className="rotate-45" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Expenses</p>
                  <p className="text-xl font-bold">$412,000</p>
                </div>
              </div>
              <div className="text-right">
                <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-400 w-1/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Card Example */}
          <div className="bg-[#03314b] p-6 rounded-3xl text-white shadow-xl shadow-blue-900/10">
            <h3 className="font-semibold mb-2">Quick Tip</h3>
            <p className="text-blue-100/70 text-sm">Your tech stocks are performing 15% better than the market average this week.</p>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DiamondPage;