export function TodoItem({ id, name, completed, toggleTodo, deleteTodo }) {
	return (
		<li className="list-item">
			<input
				checked={completed}
				type="checkbox"
				data-list-item-checkbox
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<span data-list-item-text>{name}</span>
			<button onClick={() => deleteTodo(id)} data-button-delete>
				Delete
			</button>
		</li>
	)
}
