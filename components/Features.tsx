import Image from "next/image";
import image from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import Link from "next/link";
const Features = () => {
    return (
        <div className="card-color">
        <div className='py-24 md:px-14 px-4 max-w-screen-2xl mx-auto card-color'>
            <div className=' flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>
                        Why we are better than others
                    </h3>
                    <p className='text-base text-tertiary'>A paragraph is a collection of words combined together to make a longer
                        unit than a sentence. It's a set of sentences that are well-organized and
                        coherent
                    </p>
                </div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-12 sm:gap-8'>
                        <Link href='/got5minutes'>
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8
                items-center flex justify-center items-center hover:-translate-y-4 
                transition-all duration-300'>
                            <div>
                            <Image src={image2} alt="" height={500} width={500}/>
                                <h5 className='text-xl font-semibold text-primary px-5 text-center
                        mt-5'>Got 5 minutes? <br></br>Bite-Sized Money Lessons</h5>
                            </div>
                        </div>
                        </Link>

                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8
                items-center flex justify-center items-center hover:-translate-y-4 
                transition-all duration-300'>
                            <div>
                                <Image src={image} alt="" height={500} width={500}/>
                                <h5 className='text-xl font-semibold text-primary px-5 text-center
                        '>Level Up Your Finances:<br></br> Playful Lessons, Real Results</h5>
                            </div>
                        </div>
                        <Link href="https://react-flow-git-main-gurssagars-projects.vercel.app/">
                        <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8
                items-center flex justify-center items-center hover:-translate-y-4 
                transition-all duration-300'>
                            <div>
                            <Image src={image3} alt="" height={400} width={400}/>
                                <h5 className='text-xl font-semibold text-primary px-5 text-center '>
                                    Chart Your Course: <br></br> AI-Designed Roadmaps for Personal Growth</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    );
};

export default Features;

