import assets from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Header = () => {
    const roles = [
        "front-end web developer",
        "UI/UX designer",
        "tech support specialist",
        "software tester",
        "web enthusiast"
    ];
    
    const [currentRole, setCurrentRole] = useState(0);
    
    useEffect(() => {
        // Set up interval to change role every 5 seconds
        const interval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 3000);
        
        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile} alt="Profile" className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-bold'>
                Hi! I'm Angela Nicole <Image src={assets.hand_icon} alt="Hand Icon" className='inline w-8' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>{roles[currentRole]}</h1>
            <p className='mt-2'>I'm a passionate developer with a knack for creating stunning web applications.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                    contact me <Image src={assets.right_arrow} alt="Right Arrow" className='w-4' /></a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    my resume <Image src={assets.download_icon} alt="Download Icon" className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header
