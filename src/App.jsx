import ChatBot from './Utils/ChatBot';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<CTA />
			<Footer />
			<ChatBot />
		</>
	);
}

export default App;
