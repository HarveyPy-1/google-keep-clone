import { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});

	const [notes, setNotes] = useState([]);

	function handleChange(event) {
		const { value, name } = event.target;

		setInput((currentValue) => {
			return {
				...currentValue,
				[name]: value,
			};
		});
	}

	function addNote(event) {
		setNotes([...notes, input]);
		// console.log(notes);
		event.preventDefault();
		setInput({
			title: "",
			content: "",
		});
	}

	function deleteItem(id) {
		setNotes((currentValue) => {
			return currentValue.filter((note, index) => {
				return index !== id;
			});
		});
	}

	return (
		<>
			<Header />

			<CreateArea onChange={handleChange} onClick={addNote} value={input} />

			{notes.map((note, index) => (
				<Note key={index} id={index} {...note} onClick={deleteItem} />
			))}

			<Footer />
		</>
	);
}

export default App;
