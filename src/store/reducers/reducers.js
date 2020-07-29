import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_IN_FAILURE,
  LOAD_TODOS_IN_SUCCESS,
} from "../actions/actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS: {
      return state;
    }
    case LOAD_TODOS_IN_SUCCESS:
    case LOAD_TODOS_IN_FAILURE: {
      return false;
    }
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    ///Create todo
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }

    ///Remove todo
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }

    ///Update todo
    case COMPLETE_TODO: {
      const { text } = payload;

      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }

    ///Default state
    default:
      return state;
  }
};
