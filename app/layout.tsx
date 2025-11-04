import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'FridgeAI – Your AI Nutrition Companion',
	description:
		'FridgeAI helps you track macros, generate meal plans, and make smarter food choices with AI-powered insights.',
	icons: {
		icon: '/blueFridge.png',
	},
	metadataBase: new URL('https://www.fridgeai.org'),
	openGraph: {
		title: 'FridgeAI',
		description:
			'Your AI-powered nutrition assistant. Track macros, build meal plans, and eat smarter.',
		url: 'https://www.fridgeai.org',
		siteName: 'FridgeAI',
		images: [
			{
				url: '/blueFridge.ico', // Optional: Add an OG image
				width: 1200,
				height: 630,
				alt: 'FridgeAI – AI Meal Planner',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'FridgeAI',
		description: 'AI-generated meal planning tailored to your macros.',
		images: ['/blueFridge.ico'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} font-sans antialiased`}>
				<div className='fixed top-0 left-0 w-full h-full z-0 bg-animated' />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
