import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ToDo } from "./todo.interface";
import { selectToDos, addToDo } from "./todoSlice";

export const ToDoList = () => {
  const todos = useAppSelector(selectToDos);
  const dispatch = useAppDispatch();
  return (
    <section>
      <h1>Hello World</h1>
      <input type="text" />
      <button onClick={() => dispatch(addToDo("hello"))}>Submit</button>
      <ul>
        {todos.map((todo: ToDo) => (
          <li key={todo.id}>
            <div>
              <h2>{todo.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
