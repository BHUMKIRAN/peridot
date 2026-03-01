import React from 'react'

const Stats = () => {
  const statsData = [
    { value: "10K+", label: "Active Users", suffix: "Global" },
    { value: "$50M+", label: "Assets Managed", suffix: "Secure" },
    { value: "99.9%", label: "Security Rate", suffix: "Verified" },
    { value: "24/7", label: "Direct Support", suffix: "Always" }
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Container with a subtle, modern finish */}
        <div className="bg-slate-50/50 border border-slate-100 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 relative z-10">
            {statsData.map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start space-y-2 group">
                
                {/* Small indicator dot that lights up on hover */}
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-200 group-hover:bg-emerald-500 transition-colors mb-2" />
                
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                  <span className="text-emerald-600">
                    {stat.value}
                  </span>
                </h3>
                
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-sm font-bold text-slate-800 uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                    {stat.suffix}
                  </p>
                </div>

                {/* Vertical Divider for Desktop */}
                {i !== statsData.length - 1 && (
                  <div className="hidden md:block absolute right-[-1rem] top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats