export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LOAD_TODOS_IN_SUCCESS = "LOAD_TODOS_IN_SUCESS";
export const LOAD_TODOS_IN_FAILURE = "LOAD_TODOS_IN_FAILURE";

export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const markTodoComplete = (text) => ({
  type: COMPLETE_TODO,
  payload: { text },
});

export const loadTodoInProgress = (todos) => ({
  type: LOAD_TODOS_IN_PROGRESS,
  payload: { todos },
});

export const loadTodoInSuccess = () => ({
  type: LOAD_TODOS_IN_SUCCESS,
});

export const loadTodoInFailure = () => ({
  type: LOAD_TODOS_IN_FAILURE,
});
