import { FaGooglePlay } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';

const CTA = () => {
	return (
		<div className="bg-white/85 pt-[80px] sm:pt-[106px] pb-[81px] border-b border-gray-100 px-6">
			<div className=" max-w-[1300px] mx-auto flex flex-col gap-5">
				<h3 className=" text-base sm:text-xl font-medium text-black">
					Even easier in the app
				</h3>
				<div className=" flex gap-5">
					{/* ---App Store */}
					<div className="flex items-center gap-3 px-3 py-[6px] rounded-[7px] border border-gray-300 text-gray-500 cursor-pointer">
						<FaApple size={22} />
						<p className="text-sm">App Store</p>
					</div>
					{/* ----Play Store---- */}
					<div className=" flex items-center gap-3 px-3 py-[6px] rounded-[7px] border border-gray-300 text-gray-500 cursor-pointer">
						<FaGooglePlay size={18} />
						<p className=" text-sm">PLAY STORE</p>
					</div>
				</div>
			</div>
		</div>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
