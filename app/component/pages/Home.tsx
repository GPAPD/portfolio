'use client'
import { useState } from 'react'
import ThreeHero from "../ThreeHero";

export default function Home() {
  return (
    <div
      className="relative max-w-7xl mt-30 pb-10 mx-auto px-6 grid lg:grid-cols-2 items-center scroll-mt-24"
      id="Home"
    >
      {/* Left Content */}
      <div className="space-y-6 order-2 lg:order-1">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi! I'm <span className="text-indigo-400">Praveen</span>
        </h1>

        <p className="text-gray-300 lg:text-lg mx-auto">
          Software engineer with expertise in .NET and a love for AI and ML,
          committed to developing impactful and forward-thinking applications.
        </p>

        <div className="flex gap-4">
          <a
            href="/certification/Akash-Praveen-cv-10072026.pdf"
            download
            className="inline-block px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 font-medium"
          >
            Download CV
          </a>

          <a
            href="/certification/Akash-Praveen-cv-10072026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 font-medium"
          >
            View CV
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center order-1 lg:pt-20 pb-10">
        <div className="w-full flex justify-center">
          {/* Purple glow */}
          <div className="absolute w-54 h-54 rounded-full bg-purple-600/40 blur-3xl" />

          {/* Secondary glow */}
          <div className="absolute w-42 h-42 rounded-full bg-indigo-500/30 blur-2xl" />

          {/* Image */}
          <div className="relative w-40 h-40 flex items-end justify-center">
            <img
              src="/Me.png"
              alt="Profile pic"
              title="Profile pic"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}