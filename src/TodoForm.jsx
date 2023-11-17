import { useState } from "react"
import { TodoItem } from "./TodoItem"

export function TodoForm() {
	const [todo, setTodo] = useState("")
	const [list, setList] = useState([])

	function addTodo(todo) {
		if (todo === "") return

		setList((currentList) => {
			return [
				...currentList,
				{ name: todo, completed: false, id: crypto.randomUUID() },
			]
		})
		setTodo("")
	}

	function toggleTodo(todoID, completed) {
		setList((currentList) => {
			return currentList.map((todo) => {
				if (todo.id === todoID) return { ...todo, completed }
				return todo
			})
		})
	}

	function deleteTodo(todoID) {
		setList((currentList) => {
			return currentList.filter((todo) => todo.id !== todoID)
		})
	}
	return (
		<>
			<ul id="list">
				{list.map((todo) => (
					<TodoItem
						key={todo.id}
						{...todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
			<div id="new-todo-form">
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
		</>
	)
}
