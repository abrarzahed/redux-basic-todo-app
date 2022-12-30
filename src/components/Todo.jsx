import { useState } from "react";
import { useDispatch } from "react-redux";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import updateStatus from "../redux/todos/thunk/updateStatus";
import updateColor from "../redux/todos/thunk/updateColor";
import updateTodoText from "../redux/todos/thunk/updateTodotext";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { id, text, completed, color } = todo;
  const [isEditEnable, setIsEditEnable] = useState(false);
  const [editInput, setEditInput] = useState(text);

  // handle status change
  const handleStatusChange = (todoId) => {
    dispatch(updateStatus(todoId, completed));
  };

  // handle color change
  const handleColorChange = (todoId, todoColor) => {
    dispatch(updateColor(todoId, todoColor));
  };

  // handle delete todo
  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  // handleEnableEdit
  const handleEnableEdit = () => {
    setIsEditEnable(true);
  };

  // handleEditInputChange
  const handleEditInputChange = (e) => {
    setEditInput(e.target.value);
  };

  // handleSubmitEdit
  const handleSubmitEdit = (e) => {
    setIsEditEnable(false);
    dispatch(updateTodoText(id, editInput));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500">
        <input
          checked={completed}
          onChange={() => handleStatusChange(id)}
          type="checkbox"
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className={`${
              !completed ? "hidden" : ""
            } fill-current w-3 h-3 text-green-500 pointer-events-none`}
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      {isEditEnable ? (
        <form onSubmit={handleSubmitEdit} className="w-full">
          <input
            autoFocus
            value={editInput}
            type="text"
            className="w-full bg-blue-50 py-1 px-3 focus:outline-blue-200"
            onChange={handleEditInputChange}
            onBlur={() => setIsEditEnable(false)}
          />
        </form>
      ) : (
        <div
          className={`select-none flex-1 ${completed ? "line-through" : ""}`}
        >
          {text}
        </div>
      )}

      <span
        onClick={handleEnableEdit}
        className="mx-auto material-symbols-outlined cursor-pointer text-blue-500 font-bold"
      >
        edit
      </span>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500  ${
          color === "green" && "border-green-500 bg-green-500"
        }`}
        onClick={() => handleColorChange(id, "green")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 ${
          color === "yellow" && "border-yellow-500 bg-yellow-500"
        }`}
        onClick={() => handleColorChange(id, "yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer  hover:bg-red-500 ${
          color === "red" && "border-red-500 bg-red-500"
        }`}
        onClick={() => handleColorChange(id, "red")}
      ></div>

      <img
        src="./images/cancel.png"
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}
