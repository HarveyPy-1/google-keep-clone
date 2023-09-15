function CreateArea(Props) {

	return (
		<div>
			<form>
				<input name="title" placeholder="Title" onChange={Props.onChange} value={Props.value.title}/>
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					onChange={Props.onChange}
					value={Props.value.content}
				/>
				<button style={{ fontSize: "30px" }} onClick={Props.onClick}>+</button>
			</form>
		</div>
	);
}

export default CreateArea;
