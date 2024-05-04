"use client"
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";
import img from "../assets/img.png";
import img4 from "../assets/img4.png";
import {motion} from 'framer-motion'


const About = () => {
  return (
    <div className="bg-secondary ">
      <div className='md:px-14 p-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center'>

        {/* Image Section */}
        <motion.div className='md:w-1/2 mb-6 md:mb-0 relative'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
  <Image src={img} alt="" width={500} height={500} className="z-20"/>
  <Image src={img4} alt="" width={500} height={500} className=" hover:scale-110 transition-transform duration-300 absolute inset-0 z-10"/>
</motion.div>


        {/* Text Section */}
        <div className='md:w-2/5 text-center md:text-left'>
          <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}className='md:text-5xl text-3xl font-bold text-white mb-5 leading-normal'>
            Smart Money Moves
          </motion.h2>
          <motion.p
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }} className='text-white text-lg mb-7'>
            Discover insightful perspectives on savings, investments, and mindful spending to pave the way towards financial abundance.
          </motion.p>
        </div>
        
      </div>
    </div>
  )
}

export default About;
