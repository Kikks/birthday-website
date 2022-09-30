import Greetings from "./components/Greetings";
import Header from "./components/Header";

const App = () => {
	return (
		<main className='grid w-full'>
			<Header />
			<Greetings />
		</main>
	);
};

export default App;
