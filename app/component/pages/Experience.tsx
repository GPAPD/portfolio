'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from 'next/link';

const experience = [
  { id:"1", name: 'Software Engineer', Time:"2024 - Present", company:"SuperJeweler.com", description: 'Get a better understanding of your traffic', tech: ["C#","HTML","CSS","SQL","JS",".NET"], url:"https://www.superjeweler.com" },
  { id:"2", name: 'Associate Software Engineer',Time:"2023 - 2024", company:"SuperJeweler.com", description: 'Speak directly to your customers', tech: ["C#","HTML","CSS","SQL","JS",".NET"],url:"https://www.superjeweler.com" },
  { id:"3", name: 'Graphic Designer', Time:"2021 - 2022", company:"SuperJeweler.com", description: 'Your customers’ data will be safe and secure', tech: ["Photoshop","Premiere Pro","Adobe Illustrator"],url:"https://www.superjeweler.com" },
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
            
            <div className=''>
                <div className='text-3xl font-bold text-center m-5'>
                    <h2>Experience</h2>
                </div>
                
                <ul className=" lg:mr-5 group/list">

                    {experience.map((ex) => (
                        <a href={ex.url} target="_blank" key={ex.id}>
                            <li className="grid grid-cols-4 gap-4 p-5 border border-transparent hover:border-teal-500 hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:hover:!opacity-100 lg:group-hover/list:opacity-50 rounded-lg transition-all duration-200">
                                <div className=" uppercase text-sm/7 lg:text-md">
                                    {ex.Time}
                                </div>
                                <div className="col-span-3">
                                    <div className='z-10 sm:col-span-6'>
                                        <h3 className='font-medium leading-snug text-slate-200'>{ex.name} . {ex.company}</h3>
                                    </div>
                                    <div>
                                        <div className="mt-2 text-sm leading-normal">
                                            {ex.description}
                                        </div>
                                        <ul className="mt-2 flex flex-wrap">
                                            {ex.tech.map((tech) => ( 
                                                <li className="mr-1.5 mt-2" key={tech}>
                                                    <div className="flex item-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
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