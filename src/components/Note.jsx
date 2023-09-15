import DeleteIcon from "@mui/icons-material/Delete";

const Note = (Props) => {
	return (
		<div className="note">
			<h1>
				<strong>{Props.title}</strong>
			</h1>
			<p>{Props.content}</p>
			<button onClick={() => Props.onClick(Props.id)}>
				<DeleteIcon />
			</button>
		</div>
	);
};
export default Note;
