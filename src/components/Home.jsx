import Cart from './Cart';
import Content from './Content';
import Menu from './Menu';

const Home = () => {
	return (
		<div className="w-[100vw] px-6 sm:px-10 md:px-20">
			<div className="pt-[15px] sm:pt[20px] md:pt-[35px] ">
				<div className="md:flex gap-10">
					<div className="lg:h-screen">
						<Menu />
					</div>
					<div className="flex-1 lg:max-h-screen lg:overflow-y-scroll">
						<Content />
					</div>
					<div className="lg:h-screen bg-white rounded-t-[18px] md:hidden lg:flex mt-5 md:mt-0">
						<Cart></Cart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
