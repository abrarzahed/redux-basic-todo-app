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

export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const textEdited = (todoId, todoText) => {
  return {
    type: TEXT_EDITED,
    payload: {
      todoId,
      todoText,
    },
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLOR_SELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
