import React from 'react'

const Stats = () => {
  return (
    <div className="py-20">

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-emerald-500">10K+</h3>
            <p className="text-gray-600">Users</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-500">$50M+</h3>
            <p className="text-gray-600">Assets</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-500">99.9%</h3>
            <p className="text-gray-600">Security</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-emerald-500">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>

        </div>

      </div>

  )
}

export default Stats