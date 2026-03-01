"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gem, Crown, ArrowRight } from "lucide-react";

const LandingPage = ({ open }: { open: boolean }) => {
  const router = useRouter();

  if (!open) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          className="rounded-full border-slate-200 px-8 py-6 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 hover:text-emerald-600 transition-all shadow-sm"
        >
          View Portfolio
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[380px] p-0 overflow-hidden border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-white rounded-[2rem]">
        <div className="p-10">
          <DialogHeader className="mb-8 space-y-2 text-center">
            <div className="mx-auto w-10 h-1 bg-emerald-500 rounded-full mb-4" />
            <DialogTitle className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
              Select Tier
            </DialogTitle>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Private Client Access
            </p>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Diamond Tier */}
            <button 
              onClick={() => router.push('/diamond')}
              className="group flex items-center justify-between p-5 rounded-2xl border border-slate-50 bg-slate-50/50 hover:border-emerald-500 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all text-left"
            >
              <div className="flex items-center gap-5">
              
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Elite</p>
                  <p className="font-bold text-slate-900 text-sm">Diamond Experience</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </button>

            {/* Platinum Tier */}
            <button 
              onClick={() => router.push('/platinum')}
              className="group flex items-center justify-between p-5 rounded-2xl border border-slate-50 bg-slate-50/50 hover:border-indigo-500 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all text-left"
            >
              <div className="flex items-center gap-5">
               
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Standard</p>
                  <p className="font-bold text-slate-900 text-sm">Platinum Portal</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>

        <div className="py-6 bg-slate-50/30 text-center border-t border-slate-50">
           <button className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] hover:text-slate-900 transition-colors">
             Terms of Private Access
           </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LandingPage;