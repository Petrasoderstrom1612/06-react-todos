import Button from "react-bootstrap/button";
import type { TodoOnly } from "../services/TodosAPI.types";


const AddTodoForm: React.FC<TodoOnly> = () => {


    

  return (
    <>
      <form id="new-todo-form">
        <div className="form-group mb-2">
          <input
            type="text"
            id="new-todo-title"
            name="title"
            className="form-control"
            placeholder="Enter a description of your new todo..."
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
            //  ^?
          Create
        </button>
        <Button type="reset" className="btn btn-warning">
          Reset
        </Button>
      </form>
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
