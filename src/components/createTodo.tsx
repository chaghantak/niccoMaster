import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IForm, toDoState } from "../atoms";

function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const onSubmit = ({ toDo }: IForm) => {
    setValue("toDo", "");
    // equal
    setTodos((toDouu) => [...toDouu, { text: toDo, id: Date.now(), category }]);
    // setTodos(toDos.concat({ text: toDo, category: "TO_DO" }));
    // setTodos((oldToDos) => [...oldToDos, { text: toDo, category: "TO_DO" }]);
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write to Do",
          })}
          placeholder="write"
        />
        <button>add</button>
      </form>
    </Fragment>
  );
}

export default CreateTodo;
