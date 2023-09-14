import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./services/notes"

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

function App() {
	return (
		<>
			<Header />
			{notes.map((note) => (
				<Note key={note.key} {...note} />
			))}
			<Footer />
		</>
	);
}

export default App;
