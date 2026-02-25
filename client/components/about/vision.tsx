import React from 'react'

const Vision = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our vision is to revolutionize financial technology by creating secure,
            intelligent, and user-friendly platforms that empower individuals and
            businesses worldwide.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We aim to make wealth management transparent, accessible, and efficient
            through modern technology and innovation.
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Why Choose Us
          </h3>

          <ul className="space-y-3">
            <li>Bank-level security</li>
            <li>Real-time financial insights</li>
            <li>Modern intuitive interface</li>
            <li>Secure wealth tracking</li>
            <li>Trusted by thousands</li>
          </ul>
        </div>

      </div>

  )
}

export default Vision