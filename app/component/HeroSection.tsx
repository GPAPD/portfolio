'use client'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return (
<section className="relative overflow-hidden bg-gray-900 text-white">
      <div className='w-full h-full'>

      {/* Background SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <path
            d="M0,320 C360,400 1080,240 1440,320 L1440,600 L0,600 Z"
            fill="url(#grad)"
          />
          <path
            d="M0,400 C400,300 1040,500 1440,400 L1440,600 L0,600 Z"
            fill="#1e1b4b"
            opacity="0.3"
          />
          <path
            d="M0,480 C360,360 1080,600 1440,480 L1440,600 L0,600 Z"
            fill="#6366f1"
            opacity="0.2"
          />
        </svg>
        <Home/>
        <About/>
        <Experience/>

      </div>
    </section>
  )
}