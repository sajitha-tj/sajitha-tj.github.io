import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'

export default function NotFound() {
  return (
    <div className='w-full h-screen bg-black text-white relative'>
        <div className='relative z-10 h-screen flex flex-col justify-center w-full'>
            <div className='w-[50%] mx-auto flex justify-center gap-6'>
                <h1 className='text-9xl font-bold'>404</h1>
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-3xl'>Page Not Found!</p>
                    <a href="/" className='mt-2 text-xs tracking-wider uppercase px-4 py-1 w-fit rounded border hover:bg-violet-100 hover:text-violet-950 transition-colors duration-200'>Back to Home</a>
                </div>
            </div>
        </div>
        <BackgroundBeams />
    </div>
  )
}
