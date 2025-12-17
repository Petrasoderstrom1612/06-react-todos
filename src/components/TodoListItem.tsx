import Button from "react-bootstrap/button";
import ListGroup from "react-bootstrap/ListGroup";
import type { TodoListItemProps } from "../services/TodosAPI.types";

  
    
    const TodoListItem: React.FC<TodoListItemProps> = ({todo, onToggle, deleteTodo, editTodo}) => { //FC = FunctionComponent
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
                        <Button onClick={()=> editTodo(todo)} variant="warning">Edit</Button>
                        <Button onClick={()=> deleteTodo(todo)} variant="danger">Delete</Button>

                    </div>
                </ListGroup.Item>
            
        </ListGroup>
        )
    }
    
    export default TodoListItem
                
