import React from "react";
import { updateTodos, getTodos } from "../../api";

export function MyList() {
	const [list, setList] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect(() => {
		// Loading initial todos from the server
		const fn = async () => {
			const todos = await getTodos();
			getTodos(todos.map(item => item.label));
		};
		fn();
	}, []);

	React.useEffect(() => {
		// Update todos on the server
		const fn2 = async () => {
			updateTodos(list.map(item => ({ label: item, done: false })));
		};
		if (list !== null) {
			fn2();
		}
	}, [list]);

	console.log(getTodos());
	console.log(updateTodos());

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
