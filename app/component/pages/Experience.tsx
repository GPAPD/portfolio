'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link';

const experience = [
  { id:"1", name: 'Software Engineer', Time:"2024 - Present", company:"SuperJeweler.com", description: 'Integrated APIs, optimized site performance, upgraded payment systems, implemented new features, and conducted R&D for innovative solutions.', tech: ["C#","HTML","CSS","SQL","JS",".NET"], url:"https://www.superjeweler.com" },
  { id:"2", name: 'Associate Software Engineer',Time:"2023 - 2024", company:"SuperJeweler.com", description: 'Worked on bug fixing, developed new front-end and back-end features, and improved existing workflows.', tech: ["C#","HTML","CSS","SQL","JS",".NET"],url:"https://www.superjeweler.com" },
  { id:"3", name: 'Graphic Designer', Time:"2021 - 2022", company:"SuperJeweler.com", description: 'Created and edited product photos and videos, designed banners, and ensured visual content was polished and on-brand.', tech: ["Photoshop","Premiere Pro","Adobe Illustrator"],url:"https://www.superjeweler.com" },
]

const certification = [
    {id:"1", name:"Supervised Machine Learning: Regression and Classification", URL: "https://coursera.org/share/99131f782158231082374dbf0c741986",src: "/certification/ml-sf.png"},
    {id:"2", name:"Introduction to Docker", URL: "https://coursera.org/share/34db5f857ad13e23a740bf0426382d1c",src: "/certification/google-cloud-sf.png"}
]

const Experience = () => 
{
    //const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <div className="relative max-w-7xl mx-auto lg:flex flex-wrap scroll-mt-24 justify-center mt-8 md:mt-3 mb-10 mt-20 md:mt-30" id='Experience'>
            
            <div className='sm:w-[40%] '>
                <div className='text-3xl font-bold text-center m-5'>
                    <h2>Experience</h2>
                </div>
                
                <ul className=" lg:mr-5 group/list">

                    {experience.map((ex) => (
                        <a href={ex.url} target="_blank" key={ex.id}>
                            <li>
                                <div className="grid grid-cols-4 gap-4 p-5 border border-transparent hover:border-teal-500 hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg transition-all duration-200">
                                    <div className=" uppercase text-sm/7 lg:text-md">
                                        {ex.Time}
                                    </div>
                                    <div className="col-span-3">

                                        <h3 className='font-medium leading-snug text-slate-200'>{ex.name} . {ex.company}</h3>

                                        <p className="mt-2 text-sm leading-normal flex flex-wrap">
                                            {ex.description}
                                        </p>

                                        <ul className="mt-2 flex flex-wrap">
                                            {ex.tech.map((tech) => ( 
                                                <li className="mr-1.5 mt-2" key={tech}>
                                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {tech}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                                
                            </li>
                        </a>
                    ))}
                </ul>
            </div>

            <div className="">
                <div className="text-3xl font-bold text-center m-5">
                    <h2>
                        License and Certification
                    </h2>
                </div>


                {/* Swiper Slider */}
                <div className="max-w-2xl mx-auto p-5">
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}
                    navigation
                    className="rounded-2xl shadow-lg"
                    >
                    {certification.map((cf) =>(
                    <SwiperSlide>
                        <a className='items-center' href={cf.URL} target="_blank" key={cf.id}>
                            <img src={cf.src} className="w-full rounded-xl mx-auto" />
                        </a>
                    </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Experience;