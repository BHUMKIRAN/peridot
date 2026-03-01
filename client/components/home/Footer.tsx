"use client"
import React from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Security", "Business", "Solutions"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ]

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <h1 className="text-2xl font-black text-white tracking-tighter hover:text-emerald-500 transition-colors cursor-pointer">
              Logo
            </h1>
            <p className="max-w-xs text-sm leading-relaxed">
              Empowering your financial future with smart, secure, and simple tools designed for the modern world.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerLinks.map((group, i) => (
            <div key={i} className="space-y-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                {group.title}
              </h4>
              <ul className="space-y-4 text-sm">
                {group.links.map((link, j) => (
                  <li key={j} className="group flex items-center gap-1 hover:text-emerald-400 transition-colors cursor-pointer">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium uppercase tracking-widest">
          <p>© {currentYear} YourBrand Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Systems Operational
            </span>
            <Link href="/" className="hover:text-white transition-colors">Back to top ↑</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer