'use client';

import EmailSignup from '@/components/forms/EmailSignup';

export default function AboutPage() {
	return (
		<main className='min-h-screen text-textPrimary px-6 pb-24 md:px-12 flex flex-col items-center justify-center'>
			<section className='max-w-5xl mx-auto text-center mb-20 min-h-screen flex flex-col justify-center '>
				<div className=''>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						About <span className='text-primary'>Fridra</span>
					</h1>
					<p className='text-textSecondary text-lg md:text-xl max-w-3xl mx-auto'>
						Fridra was built to make healthy eating simple and personalized. Whether you&apos;re an
						athlete, a busy professional, or just looking to eat better, Fridra tailors smart plans
						to your unique lifestyle.
					</p>
				</div>
			</section>

			{/* Journey / Timeline */}
			<section className='max-w-4xl mx-auto mb-24'>
				<h2 className='text-2xl font-semibold mb-4 text-center'>Our Journey</h2>
				<ul className='space-y-4 text-textSecondary text-center'>
					<li>🚀 Jan 2024: Concept sparked after struggling to track macros manually</li>
					<li>🛠️ Mar 2024: Started building Fridra with AI at the core</li>
					<li>👥 Jun 2024: Early testers onboarded and loved the experience</li>
					<li>📬 Now: Opening up the waitlist — join us early</li>
				</ul>
			</section>

			{/* Testimonial */}
			<section className='text-center max-w-3xl mx-auto mb-24'>
				<blockquote className='italic text-textSecondary'>
					"Fridra made meal planning effortless. It’s like having a personal nutritionist on
					demand."
				</blockquote>
				<p className='mt-2 font-semibold'>— Alyssa R., Early Tester</p>
			</section>

			{/* Partners / Press */}
			{/* <section className='text-center max-w-4xl mx-auto mb-24'>
				<h2 className='text-2xl font-semibold mb-4'>In Collaboration With</h2>
				<p className='text-textSecondary'>
					We're working with leading dietitians, fitness coaches, and health tech advisors to bring
					you the smartest food assistant.
				</p>
				<div className='mt-6 flex flex-wrap justify-center gap-6'>
					<div className='bg-white/10 rounded-lg px-6 py-4'>🍎 HealthTech Inc.</div>
					<div className='bg-white/10 rounded-lg px-6 py-4'>🏋️ FitCo Labs</div>
					<div className='bg-white/10 rounded-lg px-6 py-4'>🧠 NutriAI Network</div>
				</div>
			</section> */}

			{/* Meet the Founder */}
			<section className='text-center max-w-3xl mx-auto mb-24'>
				<h2 className='text-2xl font-semibold mb-4'>Meet the Founder</h2>
				<p className='text-textSecondary mb-4'>
					Hi, I'm Liam — a passionate engineer and athlete who built Fridra to solve a personal
					problem: making healthy eating fit my lifestyle. I hope it helps you too.
				</p>
				<div className='w-24 h-24 mx-auto rounded-full bg-white/10 flex items-center justify-center text-xl font-bold text-primary'>
					LM
				</div>
			</section>

			<section className='max-w-3xl mx-auto space-y-12 mb-24'>
				<div className='rounded-xl border border-white/10 p-8 bg-white/5 shadow-md'>
					<h2 className='text-2xl font-semibold mb-2 flex items-center gap-2 justify-center'>
						🌱 Our Mission
					</h2>
					<p className='text-textSecondary text-center'>
						We believe that nutrition should be personalized, data-driven, and effortless. Our
						mission is to empower people to take control of their health with AI-powered tools that
						are intuitive and impactful.
					</p>
				</div>
				<div className='rounded-xl border border-white/10 p-8 bg-white/5 shadow-md'>
					<h2 className='text-2xl font-semibold mb-2 flex items-center gap-2 justify-center'>
						👥 The Team
					</h2>
					<p className='text-textSecondary text-center'>
						We're a small team of engineers, athletes, and nutrition nerds who are passionate about
						making food intelligent. Our goal is to combine science and simplicity to help people
						thrive.
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
