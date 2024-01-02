import { MdOutlineStar } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const Content = () => {
	return (
		<section>
			<section className=" relative bg-custom-image w-[100%] h-[360px] rounded-[36px]">
				<div className=" w-full h-full flex flex-col justify-center items-start absolute left-10 top-16 space-y-4">
					<h1 className=" text-5xl font-semibold text-white z-[99]">KFC</h1>
					<div className=" flex items-center gap-2">
						<div className=" flex items-center gap-3 bg-white bg-opacity-80 backdrop-blur-md px-3 py-1 rounded-[16px] ">
							<MdOutlineStar size={28} />
							<div className=" flex flex-col">
								<p className=" text-xl font-medium">4.6</p>
								<p className=" text-sm text-offWhite">200+</p>
							</div>
						</div>
						<div className="px-3 py-[10px] bg-white/80 rounded-[16px] flex justify-center items-center">
							<IoMdInformationCircleOutline size={35} />
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Content;
