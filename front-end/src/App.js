import { Container } from "react-bootstrap";

import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";

const App = () => {
	return (
		<div className="App">
			<Header />

			<main className="py-3">
				<Container>
					<HomeScreen />
				</Container>
			</main>

			<Footer />
		</div>
	);
};

export default App;
