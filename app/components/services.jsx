 import React from 'react'
 import { servicedata } from './data'
import Link from 'next/link'
import { HiArrowLongRight } from "react-icons/hi2";
 import Image from 'next/image'
 const ServicesSection = () => {
   return (
       <div>
           <div className=' container mx-auto w-full'>
               <div className='relative py-16 lg:py-20 mx-auto'>
                   <div className="flex justify-center items-center mt-10 md:mt-20">
                       <div>
                           <h3 className="font-bold text-center text-xl md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 uppercase ">
                           what i do
                       </h3>
                       <div className="mt-1">
                           <span className="inline-block w-20 h-1 bg-indigo-600 rounded-full md:w-32 lg:w-40"></span>
                           <span className="inline-block w-3 h-1 ml-1 bg-indigo-600 rounded-full"></span>
                           <span className="inline-block w-3 h-1 ml-1 bg-indigo-600 rounded-full"></span>
                       </div>
                       </div>
                       </div>
                       <div className='grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3 mt-4'>
                           {servicedata.map((services) => (
                               <div className='' key={services.id}>
                                   <div className='group space-y-6 border border-gray-100 rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10'>
                                       <Image
                                           className="mx-auto bg-cover"
                                           src={ services.cover}
                                           alt="illustration"
                                           loading="lazy"
                                           width={100}
                                           height={100}
                                           
                                           />
                                        <h4 className="text-2xl font-semibold text-gray-800">{ services.title}</h4>
                                       <p>{services.text}</p>
                                       <Link
                                           href="#"
                                           className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100  before:transition before:duration-300 group-hover:before:scale-125"
                                       >
                                           <HiArrowLongRight className=" text-indigo-600 w-6 h-px"/>
                                       </Link>
                                   </div>
                                  
                                   
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           
     </div>
   )
 }
 
 export default ServicesSection