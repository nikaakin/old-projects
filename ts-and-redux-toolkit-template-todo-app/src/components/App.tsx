import React, { useEffect, useState } from "react";
import { fetchTodos, swapTodos } from "../features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import "../styles.css";

const App: React.FC = () => {
  const [firstDivIndex, setFirstDivIndex] = useState<number>(0);
  const [secondDivIndex, setSecondDivIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  return (
    <div className="todo">
      <h1>Todo List</h1>
      {state &&
        state.todos.todos.map((todo: any, i: number) => (
          <div
            className="todo__item"
            key={todo.id}
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDragStart={() => setFirstDivIndex(i)}
            onDragEnter={() => setSecondDivIndex(i)}
            onDragEnd={(e) =>
              dispatch(
                swapTodos({
                  firstDivIndex,
                  secondDivIndex,
                })
              )
            }
          >
            <h3>{todo.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default App;
