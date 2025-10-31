'use client';
import axios from 'axios';
import { useState } from 'react';
export default function EmailSignup() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const submitForm = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await axios.post(`${process.env.API_ADDRESS}/api/waitlist`, { email });
			setSubmitted(true);
		} catch (error) {
			console.error('Error submitting email:', error);
		}
	};

	if (submitted) {
		return (
			<p className='text-center text-lg font-semibold text-green-400 mt-8'>
				🎉 Thank you! You’ve been added to the waitlist.
			</p>
		);
	}

	return (
		<>
			<form
				className='mt-8 flex flex-col md:flex-row items-center justify-center gap-4'
				onSubmit={submitForm}
			>
				<input
					type='email'
					placeholder='Enter your email'
					className='border-1 border-white px-4 py-2 rounded-md  w-full md:w-72'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<button
					type='submit'
					className='px-6 py-2 rounded-md bg-primary  font-semibold hover:bg-white hover:text-black hover:cursor-pointer transition '
				>
					Join Waitlist
				</button>
			</form>
			<p className='text-xs text-gray-400 text-center mt-1.5'>
				By joining the waitlist, you agree to receive emails from Fridra.
			</p>
		</>
	);
}
