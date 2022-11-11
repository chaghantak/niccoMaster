import React from "react";
import styled from "styled-components";
import { IToDo } from "../atoms";

function Todo(props: IToDo) {
  console.log(props);
  return <Li>{props.text}</Li>;
}

export default Todo;
const Li = styled.li`
  color: ${(props) => props.theme.textColor};
`;
