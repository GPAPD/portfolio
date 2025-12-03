import { section } from "motion/react-client";
import React from "react";

export default function Footer() {
  return (

      <footer className="relative bg-gray-900 text-white py-4">
        <div className="lg:px-8 mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center">
          
          {/* Logo / Brand */}
          <div className="mb-6 md:mb-0 flex gap-6 justify-center w-full md:w-auto">
            <p className="text-gray-400 mt-2 sm:justify-center">© 2025 Akash Praveen.</p>
          </div>

          {/* Social Icons */}
          <div className=" md:mt-0 flex gap-4 justify-center w-full md:w-auto">
            <a href="https://www.instagram.com/akash.d.27?igsh=ZXozdG1sN3M1b2Ro&utm_source=qr" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/akash-praveen-260241282" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24.1 110 0 85.9 0 56.12 0 25.8 24.1 0 53.84 0S107.7 25.8 107.7 56.12c0 29.77-24.1 53.88-53.86 53.88zM447.9 448h-92.68V302.4c0-34.7-12.43-58.4-43.48-58.4-23.72 0-37.8 16-44 31.4-2.26 5.5-2.82 13.1-2.82 20.7V448h-92.7s1.24-242.6 0-267.1h92.68v37.9c12.3-19 34.3-46.1 83.44-46.1 60.9 0 106.7 39.7 106.7 125.1V448z"/>
              </svg>
            </a>

            <a href="mailto:akashpraveend@gmail.com" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512">
                <path d="M502.3 190.8L327.4 338c-10.5 8.9-24.6 13.8-38.9 13.8s-28.4-4.9-38.9-13.8L9.7 190.8C3.9 186 0 178.4 0 170.3V96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v74.3c0 8.1-3.9 15.7-9.7 20.5zM464 128H48l208 177.4L464 128zm-464 64v192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V192l-208 177.4L0 192z"/>
              </svg>
            </a>


            <a href="https://github.com/GPAPD" target="_blank" className="text-gray-400 hover:text-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.15 6.84 9.48.5.09.68-.22.68-.48 0-.23-.01-.84-.01-1.66-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.03a9.54 9.54 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.38.1 2.63.64.71 1.03 1.61 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .26.18.57.69.48A9.963 9.963 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>

        </div>
      </footer>


  );
}
