import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
import CreateTodo from "./createTodo";
import Todo from "./Todo";

function TodoList() {
  const toDos = useRecoilValue(toDoState); // value

  console.log(toDos);
  return (
    <Fragment>
      <CreateTodo />
      <ul>
        {toDos.map((dt) => (
          // <Todo key={dt.id} text={dt.text} id={dt.id} category={dt.category} /> // to much longer
          <Todo key={dt.id} {...dt} />
        ))}
      </ul>
    </Fragment>
  );
}

export default TodoList;

const Input = styled.input`
  height: 20px;
  width: 200px;
`;
