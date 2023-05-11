import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodo } from "../../Redux/Actions";

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.Reducer);

  useEffect(() => {
    dispatch(getAllTodo())
  },[])
  
  console.log("todos :>> ", todos);
  return ( 
    <div>
      <div className="my-3  ms-5 ps-5 fs-5 fw-bold">Todo List</div>
      <div><TodoInput /></div>
      <div className="my-5">
        {todos.map((todo,i) => {
          return (
            <div key={i}>
              <TodoItem key={todos.id} todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
