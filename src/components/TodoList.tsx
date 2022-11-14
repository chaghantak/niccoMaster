import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateTodo from "./createTodo";
import Todo from "./Todo";

function TodoList() {
  // const toDos = useRecoilValue(toDoState); // value
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Fragment>
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>TO_DO</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateTodo />
      <ul>
        {toDos.map((dt) => (
          // <Todo key={dt.id} text={dt.text} id={dt.id} category={dt.category} /> // to much longer
          <Todo key={dt.id} {...dt} />
        ))}
      </ul>
      \
    </Fragment>
  );
}

export default TodoList;

const H2 = styled.h2`
  color: ${(props) => props.theme.textColor};
`;
