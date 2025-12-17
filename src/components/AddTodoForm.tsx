import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {useState} from "react";
import type { CreateTodoPayload } from "../services/TodosAPI.types";
import { useEffect, useRef } from "react";

interface AddTodoFormProps{
    onAdd: (newTodo: CreateTodoPayload) => Promise<void>
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({onAdd}) => {
        const titleRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        console.log("stopped form from submitting")

        if (title.trim().length < 2){
            alert("too short")
        }

        const newTodo: CreateTodoPayload = {
            title,
            completed: false,
        }

        await onAdd(newTodo)

        setTitle("")
    }

    	// Focus on input-field on component mount
useEffect(() => {
    if (!titleRef.current) {
        return;
    }

    titleRef.current.focus();
}, []);

  return (
    <>
      <Form id="new-todo-form" onSubmit={handleSubmit}>
        <InputGroup className="form-group mb-3">
          <Form.Control
            type="text"
            id="new-todo-title"
            name="title"
            className="form-control"
            placeholder="Enter a description of your new todo..."
            ref={titleRef}
            onChange={e => setTitle(e.target.value)}
            value={title} //must be after onChange
            aria-label="Enter a description of your new todo..."
            required
          />

        <Button type="submit" className="btn btn-success" disabled={title.trim().length < 2}>
          Create
        </Button>
        <Button type="reset" className="btn btn-warning">
          Reset
        </Button>
        </InputGroup>
      </Form>
      <hr></hr>
    </>
  );
};

export default AddTodoForm;

{
  /* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */
}
{
  /* <AddTodoForm onAdd={createTodo} /> 
			do not forget e.preventDefault() React.FormEvent
			*/
}
