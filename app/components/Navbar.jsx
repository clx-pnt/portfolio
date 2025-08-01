import assets from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
    return (
        <>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>

                <a href="#top">
                    <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className='hidden md:flex items-center gap-8 lg:gap-12 rounded-full px-16 py-3 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg shadow-gray-400/30 hover:shadow-xl hover:shadow-gray-400/40 transition-all duration-300'>
                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About</a></li>
                    <li><a onClick={closeMenu} href="#work">Works</a></li>
                </ul>
                <div>
                    <a href="#connect" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Connect </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu} alt="menu" className='w-8 h-8 cursor-pointer md:hidden' />
                    </button>
                </div>
                {/* Mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div className='absolute right-6 top-6'>
                        <Image src={assets.close} alt="close" className='w-5 cursor-pointer' />
                    </div>
                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About</a></li>
                    <li><a onClick={closeMenu} href="#work">Works</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
