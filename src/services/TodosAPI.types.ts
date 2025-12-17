/**
 * Type-definitions for the TodosAPI service
 */

export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export interface TodoListItemProps {
    todo: Todo
    onToggle: (todo: Todo) => Promise<void> //copied after hovring over the void fnc
    deleteTodo: (todoId: number) => Promise<void>
    editTodo: (todo: Todo) => Promise<void>
}

export interface TodoOnly {
  todo: Todo;
}

export type CreateTodoPayload = Omit<Todo, "id">;
export type UpdateTodoPayload = Partial<CreateTodoPayload>;
