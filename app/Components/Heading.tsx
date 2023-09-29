'use client';

interface HeadingProps {
	title: string;
	subtile?: string;
	center?: boolean;
}
export const Heading: React.FC<HeadingProps> = ({ center, title, subtile }) => {
	return (
		<div className={center ? 'text-center' : 'text-start'}>
			<div className='text-2xl font-bold'>
				{title}
			</div>
			<div className='font-light text-neutral-500 mt-2'>
				{subtile}
			</div>
		</div>
	)
}
