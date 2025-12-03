'use client'
import { useState } from 'react'
import ThreeHero from "../ThreeHero";

export default function Home(){
    return (

      <div className="relative max-w-7xl mt-30 md:mt-10 mx-auto px-6 grid lg:grid-cols-2 items-center scroll-mt-24" id='Home'>
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">  
            Hi! I'm <span className="text-indigo-400">Praveen</span>
          </h1>

          <p className="text-gray-300 lg:text-lg mx-auto">
            Software engineer with expertise in .NET and a love for AI and ML, committed to developing impactful and forward-thinking applications.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 font-medium">
              Download CV
            </button>
          </div>
        </div>

        {/* Right – 3D Animation */}
        <div className="flex justify-center">
          <ThreeHero />
        </div>

      </div>
    )
}