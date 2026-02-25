import React from 'react'

const Hero = () => {
  return (
   <div className="flex flex-col justify-center items-center font-serif space-y-4 pt-32 pb-20 px-6">

        <h1 className="text-6xl text-center">
          Building a Secure
        </h1>

        <h1 className="bg-gradient-to-r from-green-300 via-emerald-400 to-emerald-600 bg-clip-text text-transparent text-5xl font-semibold text-center">
          Financial Future
        </h1>

        <p className="text-center text-gray-600 max-w-xl leading-relaxed">
          We help you to visualize, protect transfer your wealth <br />
          seamlessly with confidence
        </p>

      </div>
  )
}

export default Hero