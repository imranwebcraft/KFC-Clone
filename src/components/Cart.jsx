import emptyBag from '../assets/Empty.svg';

const Cart = () => {
	return (
		<div className="h-screen p-5 max-w-[320px]">
			<div className="h-full flex flex-col justify-between">
				<div className=" flex justify-start items-center py-2">
					<h1 className=" text-2xl font-semibold">Cart</h1>
				</div>
				<div className=" flex flex-col justify-center items-center">
					<img src={emptyBag} alt="emptyCart" className=" w-[50%] h-[50%]" />
					<p className="text-2xl text-center font-semibold mt-2">
						Your cart is currently empty
					</p>
				</div>
				<div className="border-b-2 border-gray-200"></div>
			</div>
		</div>
	);
};

export default Cart;
