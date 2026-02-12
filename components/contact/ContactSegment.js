import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const ContactSegment = ({ contacts }) => {
	const scott = contacts[0];
	// const megan = contacts[1];

	return (
		<div className='grid '>
			<div className=''>
				<div className='border p-4 border-landscape-300 rounded grid gap-4 s shadow-dark/20'>
					<div className='grid text-lg  font-logo '>
						<span>
							To arrange for a consultation or design contact{' '}
							<span className='font-bold	'> {scott.name} at:</span>
						</span>
					</div>
					<div className="grid gap-2">
						<div className='flex items-center space-x-4'>
							<span className="text-landscape-700 text-2xl">
								<AiOutlinePhone />{' '}
							</span>

							<span>{scott.phoneNumber}</span>
						</div>
						<div className='flex items-center space-x-4'>
							<span className="text-landscape-700 text-2xl">
								<AiOutlineMail />{' '}
							</span>

							<span>{scott.email}</span>
						</div>
					</div>
				</div>
				{/* <div className='px-2 py-8 grid gap-4 '>
					<span>{scott.name}</span>
					<div className="grid gap-2">
						<div className='flex items-center space-x-4'>
							<span className="text-landscape-700 text-2xl">
								<AiOutlinePhone />{' '}
							</span>

							<span>{scott.phoneNumber}</span>
						</div>
						<div className='flex items-center space-x-4'>
							<span className="text-landscape-700 text-2xl">
								<AiOutlineMail />{' '}
							</span>

							<span>{scott.email}</span>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default ContactSegment;
