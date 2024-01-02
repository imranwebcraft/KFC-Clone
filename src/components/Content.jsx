import { MdOutlineStar } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import dicountBg from '../assets/discountbg.svg';
import { FaGift } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { newArrivalProducts, whatsNewProducts } from '../constant';

const Content = () => {
	return (
		<section className=" pt-5 md:pt-0">
			{/* Image */}
			<section className=" relative bg-custom-image w-[100%] h-[360px] rounded-[36px]">
				<div className=" w-[60%] h-full flex flex-col justify-center items-start absolute left-10 top-16 space-y-4">
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

			{/* Free Delivery */}
			<section className="py-12">
				<div className="relative flex items-center gap-2 bg-[#72aa52] bg-opacity-20 px-3 py-4 rounded-[16px]">
					<img src={dicountBg} alt="discountBGImage" className=" relative" />
					<p className=" text-[#72aa52]">Free delivery – off any order</p>
					<FaGift size={20} className=" text-white absolute left-[26px]" />
				</div>
			</section>

			{/* Product Card -- Whats New */}
			<section id="new" className="pt-5 pb-10">
				<div>
					<h1 className=" text-2xl font-bold">What&apos;s New</h1>
				</div>
				<div className=" flex justify-center md:justify-start flex-wrap gap-3 mt-5">
					{whatsNewProducts?.map(({ id, img, price, name }) => (
						<div
							key={id}
							className=" bg-white py-2 rounded-[16px] px-2 flex flex-col"
						>
							<img src={img} alt="chickenImage" />
							<h3 className=" text-2xl font-semibold pt-2">{price} TK</h3>
							<p className=" mb-[40px]">{name}</p>

							<button className="flex gap-2 items-center justify-center bg-neutral-100/80 mx-auto w-full py-[12px] rounded-[16px]">
								<FaPlus size={16} /> Add
							</button>
						</div>
					))}
				</div>
			</section>
			{/* Product Card --  New Arrival */}
			<section id="arrival" className="pt-5 pb-10">
				<div>
					<h1 className=" text-2xl font-bold">New Arrival</h1>
				</div>
				<div className=" flex justify-center md:justify-start flex-wrap gap-3 mt-5">
					{newArrivalProducts?.map(({ id, img, price, name }) => (
						<div
							key={id}
							className=" bg-white py-2 rounded-[16px] px-2 flex flex-col"
						>
							<img src={img} alt="chickenImage" />
							<h3 className=" text-2xl font-semibold pt-2">{price} TK</h3>
							<p className=" mb-[40px]">{name}</p>

							<button className="flex gap-2 items-center justify-center bg-neutral-100/80 mx-auto w-full py-[12px] rounded-[16px]">
								<FaPlus size={16} /> Add
							</button>
						</div>
					))}
				</div>
			</section>
		</section>
	);
};

export default Content;
