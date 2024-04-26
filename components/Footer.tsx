import Link from 'next/link';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg'
import NewsletterForm from './NewsletterForm';


const Footer = () => {
  return (
    <div className='bg-tertiary md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
      <div className='my-1 flex flex-col md:flex-row gap-10'>
        <div className='md:w-1/2 space-y-2'>
        <Link href='/' passHref>
            <div className='text-2xl font-semibold flex items-center space-x-3 text-secondary cursor-pointer'>
              Logo<span className='text-white'>XYZ</span>
            </div>
          </Link>
          <p className='md:1/2'>A paragraph is a collection of words combined together to
           make a longer unit than a sentence. It's a set of sentences that are well-organized
            and coherent
          </p>
          <div>
            <input type="email" name="email" id="email" placeholder='Your email'
            className='bgsecondary py-2 px-4 rounded-md focus:outline-none' ></input>
            <input type="submit" value="Subscribe"  className='bgPrimary py-2 px-4 rounded-md -ml-2
             cursor-pointer hover:bg-white hover:text-secondary duration-300 transition-none' ></input>
          </div>
        </div>
        <div className='space-y-4 mt-5'>
            <h4 className='text-xl'>Platform</h4>
            <ul className='space-y3'>
            <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Overview</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Features</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>About</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Pricing</div></Link>
            </ul>
        </div>
        <div className='space-y-4 mt-5'>
        <h4 className='text-xl'>Contacts</h4>
            <ul className='space-y3'>
            <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Overview</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Features</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>About</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Pricing</div></Link>
            </ul>
        </div>
        <div className='space-y-4 mt-5'>
        <h4 className='text-xl'>Help</h4>
            <ul className='space-y3'>
            <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Overview</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Features</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>About</div></Link>
                <Link href='/' passHref><div className='block hover:text-gray-300 cursor-pointer'>Pricing</div></Link>
            </ul>
        </div>
      </div>
      <hr/>
      <div className='flex flex-col sm: flex-row gap-8 sm: items-center justify-between'>
        <p>@ XYZ 20XX --- 20XX . All rights reserved.</p>
        <div className='flex items-center space-x-5'>
            <img src={facebook} alt="" className='w-8 cursor-pointer hover:-translate-y-4 
            transition-all duration-300'/>
            <img src={instagram} alt="" className='w-8 cursor-pointer hover:-translate-y-4 
            transition-all duration-300'/>
            <img src={linkedin} alt="" className='w-8 cursor-pointer hover:-translate-y-4 
            transition-all duration-300'/>

        </div>
      </div>
      < NewsletterForm/>
    </div>
  )
}

export default Footer

