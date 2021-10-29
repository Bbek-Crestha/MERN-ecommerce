import { Container } from "react-bootstrap";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
	return (
		<div className="App">
			<Header />

			<main className="py-3">
				<Container>
					<h1>Welcome to Best Shop.</h1>
				</Container>
			</main>

			<Footer />
		</div>
	);
};

export default App;
