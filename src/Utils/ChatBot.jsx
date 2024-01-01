import { BsChatDotsFill } from 'react-icons/bs';

const ChatBot = () => {
	return (
		<div className=" fixed bottom-5 left-5 w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-yellow box-shadow flex justify-center items-center rounded-full">
			<BsChatDotsFill size={25} className="" />
		</div>
	);
};

export default ChatBot;
