import social from '../assets/social.svg';

const Copyright = () => {
	return (
		<div className=" border-t border-gray-100 py-[30px] text-offWhite">
			<div className=" max-w-[1300px] mx-auto">
				<div className=" w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
					<p className=" text-sm">© 2018–2024 Yandex Eats LLC</p>
					<div className=" flex items- gap-2">
						<p className=" text-sm">Project for Yandex</p>
						<a href="#">
							<img
								src={social}
								alt="socialImage"
								className=" w-[20px] h-[20px]"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Copyright;
