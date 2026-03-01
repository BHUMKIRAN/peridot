"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/authSlice';
import axios from 'axios';
import axiosInstance from '@/lib/axiosInstance';
import { ArrowRight, Lock, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { toast, Toaster } from 'sonner';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axiosInstance.post('/login', { email, password });
            dispatch(logIn(res.data.user));
            toast.success('Securely logged in. Welcome back!');
            router.push('/diamond')

        } catch (err: unknown) {
            const message = axios.isAxiosError(err)
                ? (err.response?.data as { message?: string })?.message || "Server connection failed"
                : "Invalid credentials";
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white font-sans p-6">
            <Toaster position="top-center" richColors />
            <div className="w-full max-w-md space-y-10">
                
                {/* Brand Header */}
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter hover:text-emerald-600 transition-colors">
                        LOGO
                    </Link>
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
                        <p className="text-slate-500 font-medium text-lg">Access your private wealth portal</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2 group">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                <input
                                    type="email"
                                    placeholder="alex@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Security Password</label>
                                <button type="button" className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest">Forgot?</button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={18} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-50 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-300"
                                />
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-100 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>Secure Login <ArrowRight size={20} /></>
                        )}
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400 font-medium">
                    New to the platform? <Link href="/register" className="text-emerald-600 font-bold hover:underline">Apply for an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;