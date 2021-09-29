import React from "react";

export function MyList() {
	const [list, setList] = React.useState([]);
	const [task, setTask] = React.useState("");

	return (
		<div>
			<input
				placeholder="Please Type...."
				className="shadow"
				type="text"
				value={task}
				onChange={event => setTask(event.target.value)}
				onKeyUp={event => {
					if (event.key === "Enter") {
						let newList = list.concat([task]);
						setList(newList);
						setTask("");
					}
				}}
			/>
			<ul className="hidden">
				<div className="title">
					{list.map((item, index) => {
						return (
							<li key={index}>
								{item}
								<button
									onClick={() => {
										let newList = list.filter(
											(value, locate) => {
												return locate !== index;
											}
										);
										setList(newList);
									}}
									className="delete">
									x
								</button>
							</li>
						);
					})}
				</div>
			</ul>
		</div>
	);
}
