import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";
export default function TodoItem({ todo, }: {
  todo: { id: string; title: string };
  // deleteTodo, setTodo
 }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item d-flex justify-content-end flex-row-reverse gap-3">
      <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </button>
      <button className="btn btn-primary" onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </button>
      {todo.title}
    </li>
  );
}
