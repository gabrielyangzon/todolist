import React from "react";
import { Wrapper, Button } from "../../styles/StyledComponents";

const TodoListItem = ({ todo, index, onDelete, onComplete }) => {
  let buttons = todo.isCompleted ? (
    <div>
      <Button onClick={() => onDelete(todo.text)} color={"#ff471a"}>
        Remove
      </Button>
    </div>
  ) : (
    <div>
      <Button color={"lime"} onClick={() => onComplete(todo.text)}>
        Mark as Completed
      </Button>

      <Button onClick={() => onDelete(todo.text)} color={"#ff471a"}>
        Remove
      </Button>
    </div>
  );

  return (
    <Wrapper key={index}>
      {`${index}.  ${todo.text}`}
      <div>{buttons}</div>
    </Wrapper>
  );
};

export default TodoListItem;
