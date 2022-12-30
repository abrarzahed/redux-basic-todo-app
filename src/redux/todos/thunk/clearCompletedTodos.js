import { clearCompleted } from "../actions";

const clearCompletedTodos = (completedTodos) => {
  return async (dispatch) => {
    for (let todo of completedTodos) {
      await fetch(`https://rdx-todo.netlify.app/todos/${todo.id}`, {
        method: "DELETE",
      });
    }

    dispatch(clearCompleted());
  };
};

export default clearCompletedTodos;
