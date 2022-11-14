/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-7 p-4 flex-shrink-0 w-[290px] md:w-[380px] xl:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-500 overflow-hidden">
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
        src={urlFor(experience?.companyImage).url()} 
        alt={`Company that I have worked: ${experience.company}`} 
        className="w-28 h-28 rounded-full md:w-20 md:h-20 xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
        <div className="md:px-10">
            <h4 className="text-3xl md:text-3xl font-light text-center">{experience.company}</h4>
            <p className="font-bold text-xl mt-1 text-center">{experience.jobTitle}</p>
            <div className="flex space-x-2 my-2 md:items-center md:justify-center">
                {
                    experience.technologies.map(technology => (
                        <img
                            key={technology._id}
                            className="h-5 w-5 md:h-10 md:w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                            alt={technology.title}
                        />
                    ))
                }
                    
                
            </div>
            <p className="uppercase text-sm font-semibold text-center py-2 text-gray-300">
                { new Date(experience.dateStarted).toDateString() } - 
                { experience.isCurrentlyWorkingHere ? 
                    "Present" : 
                    new Date(experience.dateEnded).toDateString()

                }
            </p>

            <ul className="list-disc space-y-2 ml-5 text-sm max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                {
                    experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))
                }
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard