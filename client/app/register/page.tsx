"use client";

import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "@/lib/axiosInstance";
import { User, Mail, Lock, ChevronDown, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast, Toaster } from 'sonner';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axiosInstance.post("/register", formData);
      toast.success("Account created successfully!");
    } catch (err: unknown) {
      const message = axios.isAxiosError(err)
        ? (err.response?.data as { message?: string })?.message || "Connection failed"
        : "Signup failed";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans p-6 selection:bg-emerald-100">
      <Toaster position="top-center" richColors />
      
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="space-y-3 text-center sm:text-left">
          <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter hover:text-emerald-600 transition-colors">
            LOGO
          </Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-slate-500 font-medium">Start your journey toward secure wealth management.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name */}
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
              <input 
                type="text" 
                name="name" 
                placeholder="John Doe" 
                onChange={handleChange} 
                required 
                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 transition-all text-slate-900"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
              <input 
                type="email" 
                name="email" 
                placeholder="john@example.com" 
                onChange={handleChange} 
                required 
                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 transition-all text-slate-900"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                onChange={handleChange} 
                required 
                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 transition-all text-slate-900"
              />
            </div>
          </div>

          {/* Role Select */}
          <div className="space-y-1.5 group">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Account Type</label>
            <div className="relative">
              <select 
                name="role" 
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-100 p-4 px-6 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 transition-all text-slate-900 font-bold appearance-none cursor-pointer"
              >
                <option value="user">Personal Account</option>
                <option value="admin">Institutional Admin</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-100 disabled:opacity-70 mt-4"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>Create Account <ArrowRight size={20} /></>
            )}
          </button>
        </form>

        <p className="text-center text-sm text-slate-400 font-medium pb-8">
          Already have an account? <Link href="/login" className="text-emerald-600 font-bold hover:underline">Sign in instead</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;