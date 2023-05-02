import { useState } from "react";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import TodoItem from "./item/TodoItem";

const data = [
  {
    id: 1,
    title: "Create new project",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Listen new lesson",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Fix bug",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);
  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  };


   const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id != id))
  }




  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10  text-pink-400">Todo List </h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}  changeTodo ={changeTodo} removeTodo={removeTodo}/>
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home;
