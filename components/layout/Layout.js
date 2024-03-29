import Footer from './footer/Footer';
import Navbar from './NavBar';
const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen '>
			<Navbar />
			<main className='flex-grow bg-[#F2F8EF] '>{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
