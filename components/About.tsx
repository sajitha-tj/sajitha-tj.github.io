import React from 'react'

const About = () => {
  return (
    <div className='pt-20 pb-10 resume'>
        <div className='w-full mb-12'>
            <h2 className='text-3xl font-bold uppercase mx-auto w-fit mb-4'>About</h2>
            <div className='h-[1px] w-28 mx-auto relative bg-violet-200'>
                <div className='h-[3px] w-10 bg-violet-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
        </div>
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-2'>
            <div className='w-full col-span-2 flex items-center'>
                <div className='xl:w-2/3 lg:w-4/5 w-3/5 mx-auto'>
                    <img src='/images/my-photo.jpg' alt='My Photo' className='rounded-full' style={{ objectFit: 'cover' }} />
                </div>
            </div>
            <div className='w-full col-span-3 flex items-center'>
                <div className='h-fit text-center lg:text-left'>
                    <p>
                        I&apos;m Sajitha T. Jayawickrama, a Computer Science and Engineering undergraduate specializing in cybersecurity at the University of Moratuwa.
                        <span className='hidden lg:inline'> I am committed to advancing my knowledge and skills in this dynamic field, with a strong academic track record. </span>
                        I bring a well-rounded skill set as a developer with experience in both web and software development, complemented by my creative expertise as an experienced graphic designer.
                        <span className='hidden md:inline'> My passion drives me to continuously expand my knowledge, stay at the forefront of technology, and blend technical expertise with creativity to tackle complex challenges.</span>
                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default About