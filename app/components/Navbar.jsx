import assets from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('top');
    const sideMenuRef = useRef();

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['top', 'about', 'work'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
        document.body.style.overflow = 'hidden';
    }
    
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
        document.body.style.overflow = '';
    }
    
    return (
        <>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex items-center justify-between z-50'>
                {/* Logo */}
                <a href="#top" className="transition-all hover:opacity-80">
                    <Image src={assets.logo} alt="Logo" className='w-24 cursor-pointer' />
                </a>
                
                {/* Desktop Navigation Links */}
                <ul className='hidden md:flex items-center gap-10 mx-auto'>
                    {[
                        { name: 'Home', href: '#top' },
                        { name: 'About', href: '#about' },
                        { name: 'Works', href: '#work' }
                    ].map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href}
                                className={`relative text-gray-700 hover:text-gray-900 transition-colors ${
                                    activeSection === item.href.substring(1) ? 'text-gray-900 font-medium' : ''
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/* Connect Button & Mobile Menu Button */}
                <div>
                    <a 
                        href="#connect" 
                        className='hidden md:inline-block px-8 py-2 border border-gray-300 rounded-full hover:border-gray-800 hover:text-gray-800 transition-colors'
                    >
                        Connect
                    </a>
                    <button 
                        className='block md:hidden' 
                        onClick={openMenu}
                        aria-label="Open menu"
                    >
                        <Image src={assets.menu} alt="menu" className='w-7 h-7 cursor-pointer' />
                    </button>
                </div>
                
                {/* Mobile Menu Overlay */}
                <div 
                    className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none md:hidden transition-opacity duration-300"
                    style={{ opacity: sideMenuRef.current?.style.transform === 'translateX(-16rem)' ? 1 : 0, 
                             pointerEvents: sideMenuRef.current?.style.transform === 'translateX(-16rem)' ? 'auto' : 'none' }}
                    onClick={closeMenu}
                ></div>
                
                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500'>
                    <button 
                        className='absolute right-6 top-6'
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <Image src={assets.close} alt="close" className='w-5 cursor-pointer' />
                    </button>
                    
                    {[
                        { name: 'Home', href: '#top' },
                        { name: 'About', href: '#about' },
                        { name: 'Works', href: '#work' }
                    ].map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href}
                                onClick={closeMenu}
                                className={`block py-2 border-b border-gray-50 text-gray-700 hover:text-gray-900 transition-colors ${
                                    activeSection === item.href.substring(1) ? 'text-gray-900 font-medium' : ''
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    
                    <li className="mt-6">
                        <a 
                            href="#connect"
                            onClick={closeMenu}
                            className="inline-block px-6 py-2 border border-gray-300 rounded-full hover:border-gray-800 hover:text-gray-800 transition-colors"
                        >
                            Connect
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar