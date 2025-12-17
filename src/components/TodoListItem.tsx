import Button from "react-bootstrap/button";
import ListGroup from "react-bootstrap/ListGroup";
import type { Todo } from "../services/TodosAPI.types";

interface TodoListItemProps {
    todo: Todo
    onToggle: (todo: Todo) => Promise<void> //copied after hovring over the void fnc
}  
    
    const TodoListItem: React.FC<TodoListItemProps> = ({onToggle, todo}) => { //FC = FunctionComponent
    //    ^?  
    // const TodoListItem = ({todo}: TodoListItemProps) => {
    // const TodoListItem = ({todo}: {todo: TodoListItemTodo}) => {


        return (
        <ListGroup className="todolist">
            
                <ListGroup.Item className={todo.completed ? "todo done" : "todo"}> {/* one curly */}
                    <span className="todo-title">
                        {todo.title}
                    </span>
                    <div className="todo-actions">
                        <Button onClick={() => onToggle(todo)} variant="secondary">Toggle</Button>
                        <Button variant="warning">Edit</Button>
                        <Button variant="danger">Delete</Button>

                    </div>
                </ListGroup.Item>
            
        </ListGroup>
        )
    }
    
    export default TodoListItem
                
