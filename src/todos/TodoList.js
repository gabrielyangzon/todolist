import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem/TodoListItem";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import { removeTodo, markTodoComplete } from "../store/actions/actions";
import { loadTodos } from "./thunks";

const TodoList = ({
  todos = [],
  onMarkCompletedPressed,
  onRemovePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  });
  const loadingMessage = <div>Loading todos...</div>;

  const hasCompleted = todos.some((td) => td.isCompleted);

  let completed = hasCompleted ? (
    todos
      .filter((td) => td.isCompleted)
      .map((todo, index) => (
        <TodoListItem
          index={index + 1}
          todo={todo}
          onDelete={onRemovePressed}
        />
      ))
  ) : (
    <p></p>
  );

  const content = (
    <div style={{ textAlign: "center" }}>
      <NewTodoForm />
      Your todos:
      {todos
        .filter((td) => !td.isCompleted)
        .map((todo, index) => (
          <TodoListItem
            index={index + 1}
            todo={todo}
            onDelete={onRemovePressed}
            onComplete={onMarkCompletedPressed}
          />
        ))}
      <br />
      {completed}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompletedPressed: (text) => dispatch(markTodoComplete(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
