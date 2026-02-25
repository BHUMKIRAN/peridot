"use client"
import React from "react"

const Stats = () => {
  const stats = [
    { value: "10M+", label: "Users" },
    { value: "$50B+", label: "Transactions" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ]

  return (
    <section className="bg-emerald-600 text-white py-16 px-10">
      <div className="grid grid-cols-4 text-center gap-8">

        {stats.map((stat, i) => (
          <div key={i}>
            <h2 className="text-4xl font-bold">
              {stat.value}
            </h2>

            <p className="opacity-80">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Stats