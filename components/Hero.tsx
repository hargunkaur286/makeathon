import Image from "next/image"

const Hero = () => {
    return (
        <div className="md: px-12 p-4 max-w-screen-2xl mx-auto mt-2">
            <div className="gradientBg rounded-xl rounded-br-[20px] md: p-9 px-4 py-9" >
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 mx-10 my-15">
                    <div>

                    </div>
                    <div className="md:w-3/5">
                        <h2 className='md:text-7xl text-4xl font-bold text-black mb-6 leading-relaxed my-20'>
                            <span className='text-secondary'>The Dev</span> you've been looking for all this time.</h2>
                        <p className='text-'>Why squander time and money on developers who aren't perfect for your startup?
                            Why squander time and money on developers who aren't perfect for your</p>
                        <br></br>
                        <div className='space-x-5 space-y-100'>
                            <button className='py-3 px-8 bg-tertiary font-semibold text-white rounded hover: bg-primary transition-all duration-300'>
                                Learn More
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
