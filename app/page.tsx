import Button from '@/components/common/Button';
import EmailSignup from './components/forms/EmailSignup';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='relative z-10 min-h-screen flex flex-col text-textPrimary'>
			{/* Hero */}
			<section className='flex flex-col items-center justify-center text-center h-screen px-6 py-24'>
				<Image
					src='/blueFridge.png' // or /hero-image.jpg, placed in /public folder
					alt='Fridra logo'
					width={200}
					height={200}
					className=''
				/>
				<h1 className='text-5xl font-bold max-w-3xl leading-tight'>Eat Smarter. Live Better.</h1>
				<p className='mt-4 text-lg text-textSecondary max-w-xl'>
					AI-powered meal plans that fit your macros, your activity, and your lifestyle.
				</p>
				<Link href='/waitlist'>
					<Button text='Join the Waitlist' className='mt-8' />
				</Link>
			</section>

			{/* How it Works */}
			<section className='py-20 px-6' id='how-it-works'>
				<h2 className='text-3xl font-bold text-center'>How It Works</h2>
				<div className='mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
					{[
						{
							title: 'Share Your Goals',
							desc: 'Share your lifestyle, goals, and fitness plans — or connect your health apps for smarter insights.',
						},
						{
							title: 'Cook With Confidence',
							desc: 'Get step-by-step recipes and auto-generated grocery lists tailored to what you already have.',
						},
						{
							title: 'Shop & Cook Easy',
							desc: 'Get grocery lists and recipes that fit your diet.',
						},
					].map(({ title, desc }, i) => (
						<div key={i} className='p-6 glass shadow-sm hoverGrow hover:shadow-lg'>
							<h3 className='text-xl font-semibold mb-2'>{title}</h3>
							<p className='text-textSecondary'>{desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Testimonial */}
			<section className='py-20 px-6 text-center'>
				<div className='glass  max-w-xl mx-auto p-8 rounded-lg shadow-md'>
					<div className='text-5xl text-primary mb-4' aria-hidden='true'>
						“
					</div>
					<blockquote className='italic text-lg text-textSecondary'>
						This is the AI nutritionist I’ve been waiting for.
					</blockquote>
					<p className='mt-4 text-sm text-textSecondary'>— early tester</p>
				</div>
			</section>

			{/* Features */}
			<section className='py-20 px-6' id='features'>
				<h2 className='text-3xl font-bold text-center'>Powerful Features</h2>
				<div className='mt-12 max-w-6xl mx-auto flex flex-row justify-center items-stretch'>
					<div className='flex-1'></div>
					<div className=' flex-3 flex flex-col justify-center gap-10'>
						{[
							{
								title: 'Macro Tracking',
								desc: 'Custom meal plans with your macro goals built in.',
							},
							{
								title: 'Barcode Scanning',
								desc: 'Easily scan foods to log or plan recipes.',
							},
							{
								title: 'Personal AI Coach',
								desc: 'Tailored recommendations for energy, fat loss, or muscle gain.',
							},
							{
								title: 'Fridge-Powered Recipes',
								desc: 'Suggest meals from what’s already at home.',
							},
						].map(({ title, desc }, i) => (
							<div key={i}>
								<h3 className='text-xl font-semibold text-primary'>{title}</h3>
								<p className='mt-2 text-textSecondary'>{desc}</p>
							</div>
						))}
					</div>
					<div className='flex-2 relative min-h-[400px]'>
						<div className='floatUpDown h-full w-full relative'>
							<Image
								src='/image-left.png'
								alt='App preview'
								fill
								className='object-contain rounded-lg'
							/>
						</div>
					</div>
					<div className='flex-1'></div>
				</div>
			</section>

			{/* About */}
			<section className='flex justify-center py-20'>
				<div className='py-20 px-6 glass'>
					<h2 className='text-3xl font-bold text-center text-white'>Why Fridra?</h2>
					<p className='mt-4 text-lg max-w-2xl mx-auto text-textSecondary text-center'>
						We’re building a smarter way to plan, shop, and eat — driven by AI and rooted in real
						goals.
					</p>
					<div className='mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
						<div>
							<h3 className='text-xl font-semibold text-white mb-2'>Smarter Planning</h3>
							<p className='text-textSecondary'>
								Fridra adapts to your goals, macros, and what’s in your kitchen.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold text-white mb-2'>No Guesswork</h3>
							<p className='text-textSecondary'>
								Get recipes, grocery lists, and nutrition insights — all done for you.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold text-white mb-2'>AI Nutritionist</h3>
							<p className='text-textSecondary'>Like having a dietitian in your pocket — 24/7.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='pt-20 pb-20 text-center px-6'>
				<h2 className='text-4xl font-bold'>Join Fridra Early Access</h2>
				<p className='mt-4 text-lg max-w-xl mx-auto text-textSecondary'>
					Be among the first to experience the AI-powered nutritionist in your pocket.
				</p>

				{/* Signup Form */}
				<div className='mt-10'>
					<EmailSignup />
				</div>

				{/* Key Benefits */}
				{/* <div className='mt-10'>
					<ul className='space-y-2 text-sm text-gray-300 max-w-md mx-auto'>
						<li>✓ Personalized meal planning based on your lifestyle</li>
						<li>✓ Works with your fitness goals and dietary preferences</li>
						<li>✓ Syncs with your fridge & pantry in the future</li>
					</ul>
				</div> */}

				{/* Contact */}
				<div className='mt-6 text-sm text-gray-400'>
					<p>
						Have questions?{' '}
						<a href='mailto:hello@fridra.com' className='text-primary underline'>
							Contact us
						</a>
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className='text-sm text-center text-textSecondary py-6 space-y-2'>
				<p>© {new Date().getFullYear()} Fridra. All rights reserved.</p>
				<p>
					<a href='mailto:hello@fridra.com' className='underline'>
						hello@fridra.com
					</a>{' '}
					·
					<a href='/privacy' className='underline ml-2'>
						Privacy
					</a>{' '}
					·
					<a href='/terms' className='underline ml-2'>
						Terms
					</a>
				</p>
			</footer>
		</main>
	);
}
