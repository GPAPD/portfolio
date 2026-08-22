'use client'
import { px } from 'motion'
import { useState } from 'react'

const data = (
  <>
    <p>
      Born in 2000 and currently 26, I work mainly within the .NET ecosystem,
      where I enjoy bringing clarity into complex systems—from API development
      to integrating services like Amazon Pay, to building AI-powered features
      for modern web platforms.
    </p>

    <p>
      Much of my recent work focuses on machine learning and AI-driven search
      systems, creating smarter and more intuitive user experiences.
    </p>

    <p>
      I completed my schooling at Carey College and earned{' '}
      
      <a
        href="/certification/uob-certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-indigo-300 underline"
      >
        BSc (Hons) in Computer Science from the University of Bedfordshire
      </a>
      . My degree gave me a strong foundation in software engineering,
      algorithms, databases, and modern computing, while also allowing me to
      explore areas such as artificial intelligence and machine learning.
    </p>

    <p>
      I enjoy experimenting with new ideas, whether it’s integrating ML models
      into production applications or improving workflows with modern tools and
      automation.
    </p>

    <p>
      Outside of work, I spend my time exploring new AI/ML concepts, improving
      personal projects, learning new technologies, or unwinding with games and
      music.
    </p>
  </>
);


export default function About() {
  return (
    <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center scroll-mt-34 lg:mb-20" id='About'>

      {/* Left Content */}
      <div className="flex justify-center">
        <div className="w-80 h-80 rounded-full overflow-hidden">
          <img
            src="/mainPic.jpeg"
            alt="Profile pic"
            title="Profile pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right – 3D Animation */}
      <div className='text-gray-300 text-md'>
        {/* {data.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))} */}

        {data}
      </div>




    </div>

  )
}