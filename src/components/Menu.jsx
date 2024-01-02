import { FiArrowLeft } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Menu = () => {
	const [activeLink, setActiveLink] = useState(null);

	const handleLinkClick = (id) => {
		setActiveLink(id);
	};

	useEffect(() => {
		setActiveLink(1);
	}, []);

	return (
		<div className="sm:flex md:block justify-between items-start sticky top-0">
			{/* All Category */}
			<div className=" flex gap-[5px] justify-start items-center bg-white md:pl-5 pl-5 pr-5 md:pr-20 py-2 md:py-[15px] rounded-[13px] hover:bg-opacity-50 duration-150 shadow shadow-gray-100 cursor-pointer">
				<FiArrowLeft size={20} className="font-semibold" />
				<a href="#" className="font-medium">
					All restaurants
				</a>
			</div>

			{/* ----- Menu ------- */}

			<div className="mt-5 md:mt-[48px]">
				<h3 className=" text-[18px] md:text-xl font-medium text-neutral-800 pl-5 mb-3">
					Menu
				</h3>
				<div>
					<ul>
						{navLinks.map(({ id, href, title }) => (
							<Link key={id} to={href} smooth={true} offset={50} duration={500}>
								<li
									className={`${
										activeLink === id
											? 'bg-white text-black font-medium'
											: ' text-neutral-800'
									} pl-5 pr-5 md:pr-20 py-1 md:py-[13px] rounded-[13px] hover:bg-white/50 duration-150 shadow shadow-gray-100 cursor-pointer capitalize`}
								>
									<a href="#" onClick={() => handleLinkClick(id)}>
										{title}
									</a>
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;

const navLinks = [
	{
		id: 1,
		href: 'new',
		title: "what's new",
	},
	{
		id: 2,
		href: 'arrival',
		title: 'new arrival',
	},
];
