"use client"
import { useState } from "react"
import axios from "axios"
import { Mail, MessageSquare, Send, MapPin } from "lucide-react"

const Contact = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080").replace(/\/$/, "")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value
    }

    try {
      const res = await axios.post(`${apiBaseUrl}/query`, formData)
      if (res.data) {
        alert("Your message has been sent")
        form.reset()
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text & Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
              Contact Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let’s start a <br />
              <span className="text-slate-400 font-medium">conversation.</span>
            </h3>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Have questions about our smart banking tools? Our team is here to help you optimize your financial future.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email us</p>
                <p className="text-slate-900 font-semibold">support@yourbrand.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Visit us</p>
                <p className="text-slate-900 font-semibold">Lalitpur - Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea
                name="message"
                placeholder="How can we help?"
                rows={4}
                required
                className="w-full bg-white border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white font-bold py-4 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 group active:scale-95"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact