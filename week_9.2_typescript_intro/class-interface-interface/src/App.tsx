import { useState } from "react";

import "./App.css";
import { Todo } from "./Todo";

type TodoType = {
  title: string;
  description: string;
};

function App() {
  const [todo, setTodo] = useState<TodoType>({
    title: "sachin",
    description: "kjhgfdssjhgfdsakjhgfdsajhgfdskjhgf",
  });

  return (
    <>
      <Todo todo={todo} />
    </>
  );
}

export default App;
