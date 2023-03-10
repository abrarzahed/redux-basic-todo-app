import {
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  LOADED,
  TEXT_EDITED,
  TOGGLED,
} from "./actonTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });

    case TEXT_EDITED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            text: action.payload.todoText,
          };
        } else {
          return todo;
        }
      });

    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        } else {
          return todo;
        }
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
export default reducer;
