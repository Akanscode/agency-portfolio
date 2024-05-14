import React from 'react'
import Image from 'next/image'
const AboutUs = () => {
  return (
      <div className="bg-gray-50 w-full min-h-screen ">
          <div className="container mx-auto w-full">
              <div className='relative py-16 lg:py-20 mx-auto'>
                  <div className="grid gap-16 lg:grid-cols-2">
                      <div>
                          <Image
                              src="/assests/images/heroimage.webp"
                              className="object-cover rounded-3xl shadow-md "
                              alt="aboutImage"
                              width={400}
                              height={400}
                              
                          />
                      </div>
                      <div className="flex flex-col">
                          <h2 className="font-bold text-xl md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 uppercase">
                              About me
                          </h2>
                          <div className="mt-1">
                              <span className="inline-block w-20 h-1 bg-indigo-600 rounded-full md:w-32 lg:w-40"></span>
                              <span className="inline-block w-3 h-1 ml-1 bg-indigo-600 rounded-full"></span>
                              <span className="inline-block w-1 h-1 ml-1 bg-indigo-600 rounded-full"></span>
                          </div>
                          <p className="break-all text-[1.0rem] text-justify  text-black leading-6 max-w-md">
                              Hello and welcome! I'm thrilled to share my expertise in social media marketing,
                              graphic design, and resume writing with you. With a global perspective and a commitment to excellence,
                              I specialize in crafting compelling strategies and visuals that transcend borders and resonate with audiences worldwide.
                          </p>
                          <p className='break-all text-[1.0rem] text-justify  text-black leading-6 max-w-md mt-5'>
                               In today's interconnected world, businesses and professionals alike need
                              solutions that can thrive in diverse markets. My portfolio showcases a
                              diverse range of projects, from captivating social media campaigns that
                              capture attention across continents to visually stunning designs that
                              transcend cultural boundaries.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AboutUs
