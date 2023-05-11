import { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../Redux/Actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(todo.name);
  const [edit, setEdit] = useState(false);
  return (
    <div className="d-flex align-items-center justify-content-center col-2 my-2 ms-5 ps-5">
      <div>{todo.id}</div>
      {edit ? (
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-8 mx-3"
        />
      ) : (
        <div className="mx-3">{todo.name}</div>
      )}

      <Button
        type="primary"
        onClick={() => {
          if (edit) {
            setName(todo.name);
            dispatch(updateTodo({ ...todo, name: name }));
          }
          setEdit(!edit);
        }}
        className="me-2"
      >
        {edit ? "Update" : "Edit"}
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
