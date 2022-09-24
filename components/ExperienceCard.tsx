/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-500 overflow-hidden">
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true,
        }}
        src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png" 
        alt="Company" 
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO of COMPANY</h4>
            <p className="font-bold text-2xl mt-1">FAMFAMFAM</p>
            <div className="flex space-x-2 my-2">
                {/** tech used */}
                <img 
                    src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                    alt=""
                    className="w-10 h-10 rounded-full"
                /> 
                <img 
                    src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                    alt=""
                    className="w-10 h-10 rounded-full"
                /> 
                <img 
                    src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                    alt=""
                    className="w-10 h-10 rounded-full"
                />    
                
            </div>
            <p className="uppercase py-5 text-gray-300">Started.... - Ended...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard