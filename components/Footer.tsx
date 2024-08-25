import React from 'react'
import { FaBehance, FaGithub, FaMedium } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'

const Footer = () => {
  return (
    <footer className='pt-2 pb-8'>
        <div className='flex flex-col justify-center items-center mb-20'>
            <h2 className='text-3xl md:text-5xl lg:w-2/3 leading-tight md:leading-tight tracking-wide text-center font-bold mb-6'>
                Let&apos;s connect and build something amazing together.
            </h2>
            <a
                href="https://www.linkedin.com/in/sajitha-tj/"
                className='px-6 py-2 text-xs uppercase font-bold border-2 rounded-md border-violet-300 hover:bg-violet-100 transition-colors duration-200'
            >
                connect on LinkedIn
            </a>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between mt-10'>
            <div className='text-xs text-center md:text-left mb-2 md:mb-0'>
                <p>
                    Designed and Developed by Sajitha Jayawickrama.
                </p>
                <p>
                    Built with Next.js and Tailwind CSS.
                </p>
            </div>
            <div>
                <div className='w-full flex justify-center md:justify-start'>
                    <div className='text-lg w-fit flex gap-4'>
                        <a href='mailto:sajitha.21@cse.mrt.ac.lk' className='p-1 rounded-md border transition-colors hover:bg-violet-200 duration-100' target='_blank'>
                            <LuMail />
                        </a>
                        <a href='https://github.com/sajitha-tj/' className='p-1 rounded-md border transition-colors hover:bg-violet-200 duration-100' target='_blank'>
                            <FaGithub />
                        </a>
                        <a href='https://www.behance.net/sajitha_jayawickrama' className='p-1 rounded-md border transition-colors hover:bg-violet-200 duration-100' target='_blank'>
                            <FaBehance />
                        </a>
                        <a href='https://medium.com/@sajitha-tj' className='p-1 rounded-md border transition-colors hover:bg-violet-200 duration-100' target='_blank'>
                            <FaMedium />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer