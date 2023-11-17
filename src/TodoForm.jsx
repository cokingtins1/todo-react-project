import { useState } from "react"
import { TodoItem } from "./TodoItem"

export function TodoForm() {
	const [todo, setTodo] = useState("")
	const [list, setList] = useState([])

	function addTodo(todo) {
		setList((prevList) => [...prevList, todo])
		setTodo("")
	}
	return (
		<div>
            
			{<TodoItem list={list} />}
			<label htmlFor="todo-input">New Todo</label>
			<input
				type="text"
				id="todo-input"
				onChange={(e) => {
					setTodo(e.target.value)
				}}
				value={todo}
			/>
			<button onClick={() => addTodo(todo)}>Add Todo</button>
		</div>
	)
}


