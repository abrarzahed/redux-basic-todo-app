import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addTodo from "../redux/todos/thunk/addTodo";
import clearCompletedTodos from "../redux/todos/thunk/clearCompletedTodos";
import completeAllTodos from "../redux/todos/thunk/completeAllTodos";

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  // handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 1) {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  // handle all completed
  const handleAllCompleted = () => {
    dispatch(completeAllTodos(todos));
  };

  // handle clear completed
  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos(completedTodos));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src="./images/notes.png" className="w-6 h-6" alt="Add todo" />
        <input
          value={input}
          onChange={handleInputChange}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      {todos.length > 0 && (
        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="flex space-x-1 cursor-pointer">
            <img
              className="w-4 h-4"
              src="./images/double-tick.png"
              alt="Complete"
            />
            <span onClick={handleAllCompleted}>Complete All Tasks</span>
          </li>
          <li
            onClick={handleClearCompleted}
            className="cursor-pointer text-red-400"
          >
            Clear completed
          </li>
        </ul>
      )}
    </div>
  );
}
