import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

const Menu = () => {
	const [activeLink, setActiveLink] = useState(null);

	const handleLinkClick = (id) => {
		setActiveLink(id);
	};

	return (
		<div className="">
			{/* All Category */}
			{/* All Category */}
			<div className=" flex gap-[5px] justify-start items-center bg-white pl-5 pr-20 py-[15px] rounded-[13px] hover:bg-opacity-50 duration-150 shadow shadow-gray-100 cursor-pointer">
				<FiArrowLeft size={20} className=" font-semibold" />
				<a href="#" className=" font-medium">
					All restaurants
				</a>
			</div>

			{/* ----- Menu ------- */}

			<div className="mt-[48px]">
				<h3 className="text-xl font-medium text-neutral-800 pl-5 mb-3">Menu</h3>
				<div>
					<ul>
						{navLinks.map(({ id, title }) => (
							<li
								key={id}
								className={`${
									activeLink === id
										? 'bg-white text-black font-medium'
										: ' text-neutral-800'
								} pl-5 pr-20 py-[15px] rounded-[13px] hover:bg-white duration-150 shadow shadow-gray-100 cursor-pointer capitalize`}
							>
								<a href="#" onClick={() => handleLinkClick(id)}>
									{title}
								</a>
							</li>
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
		title: "what's new",
	},
	{
		id: 2,
		title: 'new arrival',
	},
];
