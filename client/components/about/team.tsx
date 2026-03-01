import React from 'react'
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: "Kiran Khatri",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Aarav Sharma",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "Sofia Williams",
      role: "Financial Analyst",
      image: "https://i.pravatar.cc/300?img=3",
    },
    {
      name: "Emily Chen",
      role: "Product Designer",
      image: "https://i.pravatar.cc/300?img=4",
    },
  ]

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matching previous sections */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
            Expertise Behind the Scenes
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our <span className="text-slate-400 font-medium">Visionaries</span>
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              {/* Image Container with Custom Border Finish */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-100 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-30"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-48 h-48 object-cover rounded-[2.5rem] shadow-xl shadow-slate-200 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Quick Link Overlay */}
                <div className="absolute bottom-2 right-2 flex gap-2">
                   <button className="bg-white p-2 rounded-xl text-slate-900 shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300 hover:text-emerald-600">
                      <Linkedin size={18} />
                   </button>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-1">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center justify-center gap-1">
                  {member.name}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Careers */}
        <div className="mt-20 text-center">
            <p className="text-slate-500 text-sm font-medium">
                Want to join the mission? 
                <button className="ml-2 text-emerald-600 font-bold hover:underline">
                    We are hiring expert analysts
                </button>
            </p>
        </div>
      </div>
    </section>
  )
}

export default Team