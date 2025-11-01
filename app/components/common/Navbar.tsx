'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const threshold = window.innerHeight / 2; // how far user must scroll before hiding

			if (currentScrollY > lastScrollY && currentScrollY > threshold) {
				setShowNavbar(false); // scrolling down past threshold
			} else {
				setShowNavbar(true); // scrolling up or above top
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	return (
		<header
			className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
		>
			<div className={`glass m-5 transform`}>
				<div className='mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
					{/* Logo */}
					<Link href='/' className='flex items-center space-x-2'>
						<Image src='/blueFridge.png' alt='Fridra Logo' width={32} height={32} />
						<span className='text-lg font-semibold text-textPrimary'>Fridra</span>
					</Link>

					{/* Nav Links */}
					<nav className='flex items-center space-x-6 text-sm text-textSecondary'>
						<Link
							href='/#how-it-works'
							className='hidden md:block hover:text-white transition-colors duration-200'
						>
							How it Works
						</Link>
						<Link
							href='/#features'
							className='hidden md:block hover:text-white transition-colors duration-200'
						>
							Features
						</Link>
						<Link href='/about' className='hover:text-white transition-colors duration-200'>
							About
						</Link>
						<Link
							href='/waitlist'
							className='bg-primary text-white px-4 py-2 rounded hover:bg-primary-80 transition-colors'
						>
							Join Waitlist
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
