"use client"
import React from "react"
import { CreditCard, Shield, TrendingUp } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <CreditCard size={32} />,
      title: "Smart Payments",
      desc: "Send and receive payments instantly anywhere in the world."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Banking",
      desc: "Your money is protected with industry-leading security."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Grow Your Money",
      desc: "Invest and grow your savings with smart tools."
    }
  ]

  return (
    <section className="py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why choose us
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-emerald-600 mb-4">
              {feature.icon}
            </div>

            <h3 className="font-semibold text-xl mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-600">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features