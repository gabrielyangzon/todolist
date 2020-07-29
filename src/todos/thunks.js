import {
  loadTodoInProgress,
  loadTodoInSuccess,
  loadTodoInFailure,
} from "../store/actions/actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodoInProgress());
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .catch((e) => console.log(e));

    dispatch(loadTodoInSuccess(todos));
  } catch (e) {
    dispatch(loadTodoInFailure());
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
