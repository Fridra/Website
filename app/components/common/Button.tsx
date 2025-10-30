'use client';
interface ButtonProps {
	text: string;
	className?: string;
}
export default function Button({ text, className = '' }: ButtonProps) {
	return (
		<button
			className={`px-8 py-3 rounded-full font-semibold hover:opacity-90 transition border-1 hover:bg-primary hover:border-primary hover:text-white hover:cursor-pointer ${className}`}
		>
			{text}
		</button>
	);
}
