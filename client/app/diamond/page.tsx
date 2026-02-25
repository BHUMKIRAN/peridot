"use client"
import { Bell, Search } from "lucide-react";
import { useState } from "react";

const DiamondPage = () => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="flex justify-between items-center p-6 text-[#03314b]">
      {/* Left: Profile */}
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full object-cover cursor-pointer"
          src="https://i.pinimg.com/564x/5a/7b/c9/5a7bc9ee8614eef19ae0caf54f24af30.jpg"
          alt="Profile"
        />
        <h1 className="font-bold text-2xl ">Alex Julia</h1>
      </div>

      {/* Middle: Menu */}
      <ul className="flex space-x-6 font-medium">
        <li className="cursor-pointer hover:scale-110 hover:-translate-x-1 transition-transform duration-200">
          Watchlist
        </li>
        <li className="cursor-pointer hover:scale-110 hover:translate-x-1 transition-transform duration-200">
          Stock Activity
        </li>
      </ul>
      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <div onClick={() => setShowSearch(!showSearch)}>
          <Search size={20} className="cursor-pointer " />
        </div>
         {showSearch && (
          <input type="text" className="rounded-full ring-1 ring-green-300 focus:ring-green-300 px-2 py-1" placeholder="search......" />
        )}
        <div className="relative">
          <Bell size={20} className="cursor-pointer relative" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-600 rounded-full animate-pulse" /> 
        </div>
      </div>
    </div>
  );
};

export default DiamondPage;