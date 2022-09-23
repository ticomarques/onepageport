import React, { Component } from 'react';
import { motion } from 'framer-motion';



type Props = {}

type State = {}

class About extends Component<Props, State> {
  state = {}

  render() {
    return (
      <motion.div
        
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5
        }}

        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img 
            initial={{
                x:-200,
                opacity: 0 ,
            }}

            whileInView={{
                x: 0,
                opacity: 1,
            }}

            viewport={{
                once:true,
            }}

            transition={{
                duration: 1.2,
            }}

            src="https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg"
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error molestias animi, velit possimus natus ut blanditiis ipsum nihil eaque quidem voluptates laboriosam porro voluptate, facere expedita dolorem fugiat sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error molestias animi, velit possimus natus ut blanditiis ipsum nihil eaque quidem voluptates laboriosam porro voluptate, facere expedita dolorem fugiat sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error molestias animi, velit possimus natus ut blanditiis ipsum nihil eaque quidem voluptates laboriosam porro voluptate, facere expedita dolorem fugiat sequi!</p>
        </div>

      </motion.div>
    )
  }
}

export default About