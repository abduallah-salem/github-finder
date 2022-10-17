import { FaSlackHash } from 'react-icons/fa'

function Footer() {
	const footerYear = new Date().getFullYear()

	return (
		<footer className='footer p-100 bg-gray-700 footer-center text-primary-content py-2'>
			<div className='flex flex-col md:flex-row'>
					<FaSlackHash className='text-[24px] text-white' />
					<p>Copyright &copy; {footerYear}. All rights reserved</p>
			</div>
			
		</footer>
	)
}

export default Footer