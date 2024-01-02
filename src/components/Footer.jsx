import footerLinks from '../constant';
import Copyright from './Copyright';

const Footer = () => {
	return (
		<div className=" bg-white px-6 border-b">
			<div className="max-w-[1300px] mx-auto pt-[32px] pb-4">
				<nav>
					<h1 className=" font-semibold text-gray-800 pb-6">
						Company information
					</h1>
					<ul className=" flex flex-col md:flex-row flex-wrap md:items-center gap-5 py-8">
						{footerLinks.map(({ id, title }) => (
							<li key={id} className=" text-sm text-offWhite">
								<a href="#">{title}</a>
							</li>
						))}
					</ul>
				</nav>
			</div>

			<Copyright />
		</div>
	);
};

export default Footer;
