import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

function CreateArea(Props) {
	const [isExpanded, setisExpanded] = useState(false);

	function expand() {
		setisExpanded(true);
	}

	return (
		<div>
			<form className="create-note">
				{isExpanded && (
					<input
						name="title"
						placeholder="Title"
						onChange={Props.onChange}
						value={Props.value.title}
					/>
				)}
				<textarea style={{fontSize: "15px"}}
					name="content"
					placeholder="Take a note..."
					rows={isExpanded ? 3 : 1}
					onChange={Props.onChange}
					value={Props.value.content}
					onClick={expand}
				/>
				<Zoom in={isExpanded}>
					<Fab onClick={Props.onClick}>
						<AddIcon />{" "}
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
