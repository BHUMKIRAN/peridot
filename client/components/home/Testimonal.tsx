"use client"
import React from "react"

const Testimonials = () => {

  const data = [
    {
      name: "John Smith",
      text: "This app completely changed how I manage my money."
    },
    {
      name: "Sarah Johnson",
      text: "Secure, fast, and easy to use. Highly recommended."
    },
    {
      name: "David Lee",
      text: "Best banking experience I've ever had."
    }
  ]

  return (
    <section className="py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        What users say
      </h2>

      <div className="grid grid-cols-3 gap-8">

        {data.map((item, i) => (
          <div key={i} className="p-6 shadow rounded-xl">

            <p className="text-gray-600 mb-4">
              "{item.text}"
            </p>

            <h4 className="font-semibold">
              {item.name}
            </h4>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Testimonials