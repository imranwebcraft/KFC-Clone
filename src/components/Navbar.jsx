import logo from '../assets/Logo.svg';
import { TbLocationFilled } from 'react-icons/tb';
import { GrLanguage } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
	// State for nav
	const [open, setOpen] = useState(false);

	return (
		<header className="w-[100%] h-[80px] bg-white sticky top-0 left-0 px-7 z-[99]">
			<div className=" w-full h-full flex justify-between items-center border-b">
				{/* ----Left Part---- */}
				<div className=" flex gap-8 items-center">
					{/* ----Logo--- */}
					<a href="#">
						<img src={logo} alt="logo" className="w-[183px] h-[35px]" />
					</a>

					{/* ----Location---- */}

					<div className="hidden relative md:flex hover:cursor-pointer">
						<input
							type="text"
							name="address"
							id="address"
							placeholder="Enter delivery address"
							className="placeholder:font-medium placeholder:text-base max-w-[230px] rounded-[16px] placeholder:text-black pl-10 py-[10px] border-2 border-gray-300 bg-yellow hover:bg-opacity-80 duration-200 focus:border-2 focus:outline-0 focus:border-gray-300 tracking-tight hover:cursor-pointer"
						/>
						<div className=" absolute top-1/2 -translate-y-1/2 left-5">
							<TbLocationFilled size={18} />
						</div>
					</div>
				</div>
				{/* ----Right Part------ */}
				<div className="hidden md:flex gap-8">
					<div className="flex flex-col items-center justify-center group  cursor-pointer">
						<GrLanguage
							size={18}
							className=" group-hover:text-gray-500 duration-75"
						/>
						<span className=" text-[12px] group-hover:text-gray-500 duration-75">
							English
						</span>
					</div>
					<div>
						<button
							type="button"
							className=" px-6 py-3 rounded-[13px] bg-[#5c5a571a] hover:bg-opacity-10 text-base font-medium"
						>
							Log in
						</button>
					</div>
				</div>

				{/* ------Hamburger Menu------ */}
				<div
					onClick={() => setOpen(!open)}
					className=" absolute right-10 md:hidden flex justify-center items-center w-10 h-10 bg-yellow rounded-full text-black z-10"
				>
					{open ? <IoMdClose size={20} /> : <FiMenu size={20} />}
				</div>

				{open && (
					<div className="absolute tilt-in-top-1 md:hidden inset-0 bg-slate-900 h-screen w-[70vw] px-4 flex flex-col justify-start gap-8 pt-16 z-10">
						{/* ----Location Mobile View--- */}
						<div className="relative hover:cursor-pointer flex justify-center items-center">
							<input
								type="text"
								name="address"
								id="address"
								placeholder="Enter delivery address"
								className=" w-full placeholder:font-medium placeholder:text-base max-w-[230px] rounded-[16px] placeholder:text-black pl-10 py-[10px] border-2 border-gray-300 bg-yellow hover:bg-opacity-80 duration-200 focus:border-2 focus:outline-0 focus:border-gray-300 tracking-tight hover:cursor-pointer truncate"
							/>
							<div className=" absolute top-1/2 -translate-y-1/2 left-[10%] sm:left-[28%]">
								<TbLocationFilled size={18} />
							</div>
						</div>
						<div className=" flex gap-5 flex-row-reverse items-center justify-center">
							<div className="flex flex-col items-center justify-center group  cursor-pointer">
								<GrLanguage
									size={18}
									className=" group-hover:text-gray-100 duration-75 text-gray-100"
								/>
								<span className=" text-[12px] group-hover:text-gray-200 duration-75 text-gray-100">
									English
								</span>
							</div>
							<div>
								<button
									type="button"
									className=" px-6 py-3 rounded-[13px] bg-yellow hover:bg-opacity-90 text-base font-medium text-gray-900"
								>
									Log in
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
