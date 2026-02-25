"use client";

import Link from "next/link";
import React, { useState } from "react";

interface HeroProps {
  setPmsOpen: (value: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setPmsOpen }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col ml-10 space-y-3">
        <h2 className="text-emerald-900 font-bold">Try it now</h2>
        <h1 className="text-5xl font-bold">
          Change the way <br /> you use your <br /> money
        </h1>
        <p className="mt-10">
          From your everyday spending to planning for your future with savings
          and investments
        </p>

        <div className="flex justify-between">
          <button className="bg-emerald-800 text-white px-3 py-1 rounded-full w-30">
            Get started
          </button>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={rating >= star}
                  onChange={() => setRating(star)}
                />
                <span
                  className={`cursor-pointer text-2xl ${
                    rating >= star ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              </label>
            ))}
            <span className="ml-2 text-gray-600">{rating} / 5</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 h-full p-4">
        <img src="/photos/p1.jpg" alt="" />
        <img src="/photos/3.jpg" alt="" />
        <img src="/photos/4.jpg" alt="" />
        <img src="/photos/5.jpg" alt="" />
      </div>

      <div className="flex justify-center py-6 col-span-2">
        <button
          onClick={() => setPmsOpen(true)}
          className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
        >
          View PMS Models
        </button>
      </div>
    </div>
  );
};

export default Hero;