import React from "react";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem/TodoListItem";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import { removeTodo, markTodoComplete } from "../store/actions/actions";

const TodoList = ({ todos = [], onMarkCompletedPressed, onRemovePressed }) => (
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
    Completed todos
    {todos
      .filter((td) => td.isCompleted)
      .map((todo, index) => (
        <TodoListItem
          index={index + 1}
          todo={todo}
          onDelete={onRemovePressed}
        />
      ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompletedPressed: (text) => dispatch(markTodoComplete(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
