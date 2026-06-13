import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const saved = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(saved ? JSON.parse(saved) : []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [theme, setTheme] = useState("light");

  function themeToggle() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
    setTheme(newTheme);
  }

  function toggleCompleted(id) {
    const updated = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updated);
  }
  function deleteTask(id) {
    const deleteT = tasks.filter((task) => task.id !== id);
    setTasks(deleteT);
  }
  function clearCompleted() {
    const activeT = tasks.filter((task) => task.completed === false);
    setTasks(activeT);
  }

  return (
    <div className=" flex flex-col min-h-screen bg-gray-100 dark:bg-[#161722]">
      <Header theme={theme} themeToggle={themeToggle}></Header>
      <div className="px-4 pb-5 mx-auto w-full max-w-2xl -mt-24 relative z-20 ">
        <Input setTasks={setTasks} tasks={tasks}></Input>
        <TodoList
          tasks={tasks}
          toggleCompleted={toggleCompleted}
          activeFilter={activeFilter}
          deleteTask={deleteTask}
        ></TodoList>
        <Filter
          tasks={tasks}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          clearCompleted={clearCompleted}
        ></Filter>
      </div>
    </div>
  );
}
export default App;
