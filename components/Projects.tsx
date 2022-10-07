/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';
type Props = {
    projects: Project[];
}

function Projects({projects}: Props) {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
    
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {projects?.map((project, i)=>(
                <div key={i} className="w-screen flex-shrink-0 flex flex-col space-y-4 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{ y: -300, opacity:0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once: true }}
                        src={urlFor(project?.image).url()} 
                        alt={`Project: ${project}`}
                    />

                    <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-3xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50"></span> {i+1}/{projects.length}: {project.title}
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                            {project?.technologies.map((technology)=>(
                                <img 
                                    key={technology._id}
                                    src={urlFor(technology.image).url()}
                                    alt={technology.title}
                                    className="w-6 h-6 md:w-12 md:h-12 rounded-full"
                                />
                            ))}
                        </div>

                        <p className="text-sm text-center md:text-lg md:text-left">{project.summary}</p>
                        <a href={project.linkToBuild} className="flex flex-col text-sm text-center text-[#F7AB0A]/50 hover:text-[#F7AB0A]/90">{project.title}</a>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects