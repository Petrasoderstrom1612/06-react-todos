import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { PacmanLoader } from "react-spinners";
import SuccessAlert from "../components/alerts/SuccessAlert"
import TodoListItem from "../components/TodoListItem";
import * as TodosAPI from "../services/TodosAPI"; //import everything from TodosAPI
import type { Todo } from "../services/TodosAPI.types";

const TodosPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[] | null>(null);

	useEffect(() =>{
		(async () => {
			setIsLoading(true);
			const data = await TodosAPI.getTodos(); //from TodosAPI.ts
			setTodos(data);
			setIsLoading(false);
		})();
	},[])
	

	const toggleTodo = async (todo: Todo) => {
		await TodosAPI.updateTodo(todo.id, { completed: !todo.completed });

		setTodos(prev =>
		prev ? prev.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t): prev);
	}

	const deleteTodo = async (todo: Todo) => {
		await TodosAPI.deleteTodo(todo.id)

		setTodos(prev => prev? prev.filter(prevTodo => prevTodo.id !== todo.id): prev)
	}

	return (
		<>
		<SuccessAlert>! success</SuccessAlert>

			<h1 className="mb-3">Todos</h1>

			{/* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */}
			{/* <AddTodoForm onAdd={createTodo} /> 
			do not forget e.preventDefault() React.FormEvent
			*/}

			<p>Here be form</p>

			{isLoading && <div id="loading-spinner-wrapper"><PacmanLoader size={30} color="#f00" speedMultiplier={1.25} /></div>}

			{todos && ( //if you do not write it like this, then you have to have a question after todos in the mapping
				<ListGroup className="todolist"> {/*UL bootstrap*/}
					{todos.map(todo => ( 
						<TodoListItem 
							key={todo.id}
							todo={todo}
							onToggle={toggleTodo}
							deleteTodo={deleteTodo}
						/>
					))}
				</ListGroup>
			)}
		</>
	)
}

export default TodosPage
