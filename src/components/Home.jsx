import Cart from './Cart';
import Content from './Content';
import Menu from './Menu';

const Home = () => {
	return (
		<div className="min-h-screen w-[100vw] px-8 sm:px-10 md:px-20">
			<div className=" h-full pt-[15px] sm:pt[20px] md:pt-[35px] ">
				<div className=" h-full md:flex gap-10">
					<div className="h-full">
						<Menu />
					</div>
					<div className="h-full flex-1 border overflow-y-auto">
						<Content />
					</div>
					<div className="h-full bg-white rounded-t-[18px]">
						<Cart></Cart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
