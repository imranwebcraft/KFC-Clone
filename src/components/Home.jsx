import Cart from './Cart';
import Content from './Content';
import Menu from './Menu';

const Home = () => {
	return (
		<div className="min-h-screen w-[100vw] px-8 sm:px-10 md:px-20">
			<div className="pt-[15px] sm:pt[20px] md:pt-[35px] ">
				<div className="md:flex gap-10">
					<div className="">
						<Menu />
					</div>
					<div className="flex-1 border">
						<Content />
					</div>
					<div className=" border">
						<Cart></Cart>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
