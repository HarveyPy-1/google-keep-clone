const Note = (Props) => {
	return (
			<div className="note">
				<h1>{Props.title}</h1>
				<p>{Props.content}</p>
				<button onClick={() => Props.onClick(Props.id)}>DELETE</button>
			</div>
	);
};
export default Note;
