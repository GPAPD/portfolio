'use client'
import { px } from 'motion'
import { useState } from 'react'

const data = `Born in 2000 and currently 25, I work mainly within the .NET ecosystem, where I enjoy bringing clarity into complex systems—from API development to integrating services like Amazon Pay, to building AI-powered features for modern web platforms.

Much of my recent work focuses on machine learning and AI-driven search systems, creating smarter and more intuitive user experiences.
I completed my schooling at Carey College and graduated from SLIIT University with a Computer Science degree. I enjoy experimenting with new ideas, whether it’s integrating ML models into production apps or improving workflows with modern tools and automation.

Outside of work, I spend my time exploring new AI/ML concepts, improving personal projects, learning new technologies, or unwinding with games and music.`;


export default function About(){
    return (
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center scroll-mt-34 lg:mb-20" id='About'>
        
        {/* Left Content */}
        <div className="space-y-10">
            <img
            src={"/IMG-20220307-WA0107.jpg"}
            alt='Profile pic'
            title='Profile pic'
            className="w-[300px] h-auto mx-auto rounded-xl"
            />
            
        </div>

        {/* Right – 3D Animation */}
        <p className='text-gray-300 text-md'>
          {data.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>

        


      </div>
      
    )
}