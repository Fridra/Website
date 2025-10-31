'use client';

import { useState } from 'react';
import axios from 'axios';
import Button from '@/components/common/Button';
import { AxiosError } from 'axios';

export default function WaitlistPage() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [alreadyOnList, setAlreadyOnList] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8080/api/waitlist', { firstName, lastName, email });
			setSubmitted(true);
		} catch (err: unknown) {
			const axiosError = err as AxiosError;
			if (axiosError.response?.status === 409) {
				setAlreadyOnList(true);
			} else {
				console.error('Error:', err);
				alert('Something went wrong. Please try again later.');
			}
		}
	};

	return (
		<main className='min-h-screen bg-animated-sm text-textPrimary flex items-center justify-center px-4 py-24'>
			<div className='max-w-md w-full'>
				<h1 className='text-3xl font-bold mb-6 text-center'>
					Join the <span className='text-primary'>Fridra</span> Waitlist
				</h1>
				{submitted ? (
					<p className='text-green-400 text-center'>
						🎉 Thank you, {firstName || 'friend'}! You’re on the list.
					</p>
				) : alreadyOnList ? (
					<p className='text-yellow-400 text-center'>
						🎉 Congratulations, {firstName || 'friend'}! You’re already on the waitlist.
					</p>
				) : (
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='space-y-0 flex flex-row'>
							<input
								type='text'
								placeholder='First Name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className='w-full px-4 py-2 rounded-md text-white'
							/>
							<input
								type='text'
								placeholder='Last Name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								className='w-full px-4 py-2 rounded-md text-white'
							/>
						</div>
						<input
							type='email'
							placeholder='Your Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full px-4 py-2 rounded-m text-white'
							required
						/>
						<div className=''>
							<Button text='Join Waitlist' className='w-full border-primary text-primary text-xl' />
							<p className='text-xs text-gray-400 text-center mt-1.5'>
								By joining the waitlist, you agree to receive emails from Fridra.
							</p>
						</div>
					</form>
				)}
			</div>
		</main>
	);
}
