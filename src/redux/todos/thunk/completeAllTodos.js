import { allCompleted } from "../actions";

const completeAllTodos = (allTodos) => {
  return async (dispatch) => {
    for (let todo of allTodos) {
      await fetch(`https://rdx-todo.netlify.app/todos/${todo.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: true,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }

    dispatch(allCompleted());
  };
};

export default completeAllTodos;
