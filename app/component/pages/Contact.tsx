export default function Contact() {
    return (
        <section
            id="Contact"
            className="relative max-w-7xl mx-auto px-6 lg:py-24 scroll-mt-24"
        >
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Let's <span className="text-indigo-400">Connect</span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Have a project in mind, a job opportunity, or simply want to talk
                    about software, AI, and technology? Feel free to get in touch.
                </p>
            </div>

            {/* Contact Content */}
            <div className="max-w-5xl mx-auto text-center">

                {/* Contact Information */}
                <div className="relative rounded-2xl border  border-white/10 bg-white/5 p-8 overflow-hidden">
                    {/* Glow */}
                    <div className="absolute -top-20 -left-20 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold mb-6">
                            Get in touch
                        </h3>

                        <p className="text-gray-400 mb-8">
                            I'm always open to discussing new projects, opportunities,
                            collaborations, or interesting ideas.
                        </p>

                        <div className="space-y-5 lg:flex lg:flex-1 lg:justify-between">

                            {/* Email */}
                            <a
                                href="mailto:akashprav00@gmail.com"
                                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
                            >
                                <div className="w-11 h-11 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M502.3 190.8L327.4 338c-10.5 8.9-24.6 13.8-38.9 13.8s-28.4-4.9-38.9-13.8L9.7 190.8C3.9 186 0 178.4 0 170.3V96c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v74.3c0 8.1-3.9 15.7-9.7 20.5zM464 128H48l208 177.4L464 128zm-464 64v192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V192l-208 177.4L0 192z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p>akashprav00@gmail.com</p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/GPAPD"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
                            >
                                <div className="w-11 h-11 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.15 6.84 9.48.5.09.68-.22.68-.48 0-.23-.01-.84-.01-1.66-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.03a9.54 9.54 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.38.1 2.63.64.71 1.03 1.61 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.74 0 .26.18.57.69.48A9.963 9.963 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">GitHub</p>
                                    <p>github.com/GPAPD</p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/akash-praveen-260241282/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-gray-300 hover:text-indigo-400 transition"
                            >
                                <div className="w-11 h-11 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512">
                                        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24.1 110 0 85.9 0 56.12 0 25.8 24.1 0 53.84 0S107.7 25.8 107.7 56.12c0 29.77-24.1 53.88-53.86 53.88zM447.9 448h-92.68V302.4c0-34.7-12.43-58.4-43.48-58.4-23.72 0-37.8 16-44 31.4-2.26 5.5-2.82 13.1-2.82 20.7V448h-92.7s1.24-242.6 0-267.1h92.68v37.9c12.3-19 34.3-46.1 83.44-46.1 60.9 0 106.7 39.7 106.7 125.1V448z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">LinkedIn</p>
                                    <p>linkedin.com/in/akash-praveen</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Send me a message
          </h3>

          <form className="space-y-5">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-indigo-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Send Message
            </button>

          </form>
        </div> */}
            </div>
        </section>
    );
}