const todos = [];

function reducer(state = todos, action) {
  let newTodos;
  switch (action.type) {
    case "GET_ALL_TODO_SAGA":
      return [...state, ...action.payload];
    case "ADD_TODO_SAGA":
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case "DELETE_TODO_SAGA":
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case "UPDATE_TODO_SAGA":
      newTodos = [...state];
      newTodos = newTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
      return newTodos;
    default:
      return state;
  }
}

export default reducer;
