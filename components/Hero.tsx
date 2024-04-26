"use client"
import Image from "next/image"
import Projects from "./Projects"
import img1 from "../assets/img1.png";
import {motion} from 'framer-motion'

const Hero = () => {

    return (
        <div  className='card-color min-h-screen flex items-center justify-center '>
        <div className="md: px-12 p-4 max-w-screen-2xl mx-auto mt-12">
            <div className="bg-secondary rounded-xl rounded-br-[20px] md: p-9 px-4 py-9 " >
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 mx-10 my-15">
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='md:text-7xl text-4xl font-bold text-black mb-6 leading-relaxed'>
                      <Image src={img1} alt="" height={500} width={500}/>
                    </motion.div>
                    
                    <div className="md:w-3/5">
    <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='md:text-7xl text-4xl font-bold text-black mb-6 leading-relaxed'
    >
        <span className='text-white'>The Dev</span> you've been looking for all this time.
    </motion.h2>
    <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg'
    >
        Why squander time and money on developers who aren't perfect for your startup?
        Why squander time and money on developers who aren't perfect for your
    </motion.p>
    <br></br>
    <div className='space-x-5 space-y-100'>
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='py-3 px-8 bg-tertiary font-semibold text-white rounded hover:bg-primary transition-all duration-300'
        >
            Learn More
        </motion.button>
    </div>
</div>
                    

                </div>
            </div>
            <Projects/>
        </div>
        </div>
   
    )
}

export default Hero
