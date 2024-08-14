import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import { FaBehance, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-black text-white pt-36 md:px-40 px-10 pb-20 relative overflow-hidden'>
        <div className='pt-[22vh] md:pt-36 flex flex-col items-center md:items-start relative z-10'>
            <div className='text-4xl md:text-6xl leading-tight md:leading-snug tracking-wide text-center md:text-left font-bold'>
                <h1>Hey There! I&#39;m</h1>
                <h1 className='text-violet-300'>Sajitha Jayawickrama</h1>
            </div>
            <div>
                <p className='uppercase tracking-widest text-xs mt-3 text-center md:text-left leading-snug'>
                    CyberSecurity Enthusiast <span className='hidden md:inline'>|</span> <br className='inline md:hidden' /> Developer | Designer
                </p>
            </div>
            {/* links */}
            <div className='w-full flex justify-center md:justify-start'>
            <div className='mt-3 text-lg w-fit flex gap-4'>
                <a href='https://github.com/sajitha-tj/' className='transition-colors hover:text-violet-300 duration-100' target='_blank'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/sajitha-tj/' className='transition-colors hover:text-violet-300 duration-100' target='_blank'>
                    <FaLinkedin />
                </a>
                <a href='https://www.behance.net/sajitha_jayawickrama' className='transition-colors hover:text-violet-300 duration-100' target='_blank'>
                    <FaBehance />
                </a>
                <a href='mailto:sajitha.21@cse.mrt.ac.lk' className='transition-colors hover:text-violet-300 duration-100' target='_blank'>
                    <LuMail />
                </a>
            </div>
        </div>
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default Hero