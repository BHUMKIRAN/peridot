"use client"

import { useState } from "react"
import axios from "axios"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CTA = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080").replace(/\/$/, "")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }

    try {
      setLoading(true)
      const res = await axios.post(`${apiBaseUrl}/register`, data)
      if (res.data) alert("User registered successfully")
    } catch (err: any) {
      console.error(err)
      alert(err?.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        
        {/* Simplified Clean Typography */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Ready to change the <br /> 
            <span className="text-emerald-600">way you use money?</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of users who are already optimizing their financial future with our simple, smart tools.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-16 bg-emerald-600 hover:bg-emerald-700 text-white px-12 rounded-full text-lg font-bold transition-all shadow-lg shadow-emerald-100 hover:shadow-emerald-200 active:scale-95">
              Create Account
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md rounded-3xl border border-slate-100 p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <DialogTitle className="text-3xl font-bold text-slate-900 tracking-tight">
                  Join Us
                </DialogTitle>
                <DialogDescription className="text-slate-500 text-base">
                  Start your journey in seconds.
                </DialogDescription>
              </div>

              <div className="space-y-5">
                <div className="grid gap-2">
                  <Label className="text-slate-900 font-bold ml-1 text-sm">Full Name</Label>
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white h-12 px-4 transition-all"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-slate-900 font-bold ml-1 text-sm">Email Address</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white h-12 px-4 transition-all"
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-slate-900 font-bold ml-1 text-sm">Password</Label>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    required
                    className="rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white h-12 px-4 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold h-14 text-md shadow-md shadow-emerald-100 transition-all"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Get Started"
                  )}
                </Button>
                <DialogClose asChild>
                  <button type="button" className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">
                    Maybe later
                  </button>
                </DialogClose>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default CTA