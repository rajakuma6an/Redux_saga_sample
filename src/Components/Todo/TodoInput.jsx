import { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Math.random().toFixed(0),
        name: name,
      })
    );
    setName("");
  };

  return (
    <div className="d-flex align-items-center col-8 ms-5">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="col-2 mx-3"
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
