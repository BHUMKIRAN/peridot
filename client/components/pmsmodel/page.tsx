"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gem, Crown, ArrowRight, X } from "lucide-react";

interface LandingPageProps {
  open: boolean;
}

const LandingPage = ({ open }: LandingPageProps) => {
  const router = useRouter();

  if (!open) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="rounded-full border-slate-200 font-bold px-8 hover:bg-slate-50 hover:text-emerald-600 transition-all"
        >
          View PMS
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md border-none bg-white rounded-[2rem] p-0 overflow-hidden shadow-2xl">
        {/* Decorative Header */}
        <div className="bg-emerald-900 p-8 text-center space-y-2 relative">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-black tracking-tight">
              Select Tier
            </DialogTitle>
            <DialogDescription className="text-slate-400 font-medium uppercase text-[10px] tracking-[0.2em]">
              Choose Your Portfolio Experience
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-4 bg-white">
          {/* Diamond Tier Option */}
          <button 
            onClick={() => router.push('/diamond')}
            className="w-full flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all group"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 bg-white rounded-xl shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
                <Gem size={24} />
              </div>
              <div className="text-left">
                <p className="font-black text-slate-900 uppercase tracking-widest text-xs">Diamond</p>
                <p className="text-sm text-slate-500 font-medium">Ultra-High Net Worth Analytics</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </button>

          {/* Platinum Tier Option */}
          <button 
            onClick={() => router.push('/platinum')}
            className="w-full flex items-center justify-between p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all group"
          >
            <div className="flex items-center gap-5">
              <div className="p-3 bg-white rounded-xl shadow-sm text-slate-400 group-hover:scale-110 transition-transform">
                <Crown size={24} />
              </div>
              <div className="text-left">
                <p className="font-black text-slate-900 uppercase tracking-widest text-xs text-slate-400">Platinum</p>
                <p className="text-sm text-slate-500 font-medium">Standard Institutional Portal</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </button>

          <div className="pt-4">
            <DialogClose asChild>
              <Button variant="ghost" className="w-full text-slate-400 font-bold hover:text-slate-900 text-xs uppercase tracking-widest">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LandingPage;