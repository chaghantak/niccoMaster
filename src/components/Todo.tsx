import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

function Todo({ category, text, id }: IToDo) {
  const setTodo = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = event.currentTarget;
    setTodo((oldTodo) =>
      oldTodo.map((dt) =>
        dt.id === id ? { ...dt, category: name as any } : dt
      )
    );
  };
  const onRemove = (id: number) => {
    setTodo((oldTodo) => oldTodo.filter((dt) => dt.id !== id));
  };
  // function Todo(props: IToDo) {
  // category text id

  //   text: string;
  //   id: number;
  //   category: "TO_DO" | "DOING" | "DONE";
  return (
    <Li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          Todo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
      <button onClick={() => onRemove(id)}>remove</button>
    </Li>
  );
}

export default Todo;
const Li = styled.li`
  color: ${(props) => props.theme.textColor};
`;
