function TodoList({ tasks, toggleCompleted, deleteTask, activeFilter }) {
  let filteredTasks = tasks;
  if (activeFilter === "Active")
    filteredTasks = tasks.filter((task) => task.completed === false);
  if (activeFilter === "Completed")
    filteredTasks = tasks.filter((task) => task.completed === true);

  return (
    <div>
      <ul>
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center border-b border-gray-500/40 z-20 bg-white p-4 rounded-md shadow-md dark:bg-[#25273c] dark:text-white"
          >
            <div
              onClick={() => toggleCompleted(task.id)}
              className={`rounded-full mr-2 w-4 h-4 flex hover:cursor-pointer
               ${
                 task.completed
                   ? "bg-linear-to-br from-sky-500 to-fuchsia-500 line-through"
                   : "border border-gray-700/30 transition duration-300 hover:border-blue-500/50 hover:border-2 dark:border-gray-600 dark:hover:border-blue-500"
               }`}
            >
              {task.completed && (
                <img
                  src="/images/icon-check.svg"
                  alt="check mark"
                  className="w-2 h-2 m-auto "
                />
              )}
            </div>
            <span
              className={`text-lg mr-auto self-start leading-tight
               ${task.completed ? "line-through text-gray-400" : ""}`}
            >
              {task.name}
            </span>
            <img
              onClick={() => deleteTask(task.id)}
              src="/images/icon-cross.svg"
              alt="delete icon"
              className="w-3 h-3 ml-5 dark:invert hover:cursor-pointer  hover:opacity-40 transition duration-200"
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
