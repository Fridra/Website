'use client';

import EmailSignup from '@/components/forms/EmailSignup';

export default function AboutPage() {
	return (
		<main className='min-h-screen text-textPrimary px-6 md:px-12 py-24 flex flex-col items-center justify-center'>
			<section className='max-w-5xl mx-auto text-center mb-20'>
				<h1 className='text-4xl md:text-5xl font-bold mb-4'>
					About <span className='text-primary'>Fridra</span>
				</h1>
				<p className='text-textSecondary text-lg md:text-xl max-w-3xl mx-auto'>
					Fridra was built to make healthy eating simple and personalized. Whether you&apos;re an
					athlete, a busy professional, or just looking to eat better, Fridra tailors smart plans to
					your unique lifestyle.
				</p>
			</section>

			<section className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-24'>
				<div className='glass rounded-xl p-8 shadow-md'>
					<h2 className='text-2xl font-semibold mb-4'>Our Mission</h2>
					<p className='text-textSecondary'>
						We believe that nutrition should be personalized, data-driven, and effortless. Our
						mission is to empower people to take control of their health with AI-powered tools that
						are intuitive and impactful.
					</p>
				</div>
				<div className='glass rounded-xl p-8 shadow-md'>
					<h2 className='text-2xl font-semibold mb-4'>The Team</h2>
					<p className='text-textSecondary'>
						We&apos;re a small team of engineers, designers, and nutrition nerds who are passionate
						about making food intelligent. Our goal is to combine science and simplicity to help
						people thrive.
					</p>
				</div>
			</section>

			<section className='text-center'>
				<h2 className='text-3xl font-semibold mb-4'>Be Part of the Future of Nutrition</h2>
				<p className='text-textSecondary mb-6'>
					Join our waitlist and be among the first to experience personalized, AI-powered meal
					planning.
				</p>

				<EmailSignup />

				{/* <Link
					href='/waitlist'
					className='inline-block bg-primary hover:bg-primary-80 text-white font-semibold px-6 py-3 rounded transition'
				>
					Join the Waitlist
				</Link> */}
			</section>
		</main>
	);
}
