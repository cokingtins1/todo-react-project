export function TodoItem({ list }) {
	return (
		<ul>
			{list && list.length > 0
				? list.map((item, index) => (
						<li key={index}>
							<input type="checkbox" />
							{item}
							<button>Delete</button>
						</li>
				  ))
				: undefined}
		</ul>
	)

	// return (
	// 	<ul>
	// 		{list.map((item, index) => (
	// 			<li key={index}>
	// 				<input type="checkbox" />
	// 				{item}
	// 				<button>Delete</button>
	// 			</li>
	// 		))}
	// 	</ul>
	// )
}

// {list && list.length > 0
//     ? list.map((item, index) => (
//             <li key={index}>
//                 <input type="checkbox" />
//                 {item}
//                 <button>Delete</button>
//             </li>
//       ))
//     : undefined}
// </ul>
