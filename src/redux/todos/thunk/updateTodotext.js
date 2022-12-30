import { textEdited } from "../actions";

const updateTodoText = (todoId, todoText) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://rdx-todo.netlify.app/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: todoText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(textEdited(todo.id, todo.text));
  };
};

export default updateTodoText;
