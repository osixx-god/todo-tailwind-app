function Filter({ tasks, clearCompleted, activeFilter, setActiveFilter }) {
  const activeT = tasks.filter(getActiveT);

  function getActiveT(task) {
    return task.completed === false;
  }
  

  return (
    <>
      <div className={`${tasks.length > 0
          ? "flex justify-between items-center text-sm border-b text-gray-400 border-gray-500/40 z-20 bg-white p-4 rounded-md shadow-md dark:bg-[#25273c] dark:text-white/30"
          : "hidden"
        }`}>
        <p>{activeT.length} item(s) left</p>
        <div className="gap-3 hidden md:flex">
          <button
            onClick={() => setActiveFilter("All")}
            className=" hover:cursor-pointer hover:text-blue-500"
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Active")}
            className=" hover:cursor-pointer hover:text-blue-500"
          >
            Active
          </button>
          <button
            onClick={() => setActiveFilter("Completed")}
            className=" hover:cursor-pointer hover:text-blue-500"
          >
            Completed
          </button>
        </div>
        <button
          onClick={clearCompleted}
          className=" hover:cursor-pointer hover:text-red-500 transition duration-200"
        >
          Clear Completed
        </button>
      </div>
      <div className={`${tasks.length > 0 ? "" : "fixed bottom-0 left-0 right-0"} 
        flex justify-between md:hidden items-center gap-3 border-b text-gray-400 border-gray-500/40 z-20 py-4 px-14 text-sm rounded-md shadow-md mt-4 dark:bg-[#25273c] dark:text-white/30
        `}>
        <button
          onClick={() => setActiveFilter("All")}
          className={` hover:cursor-pointer hover:text-black dark:hover:text-white ${activeFilter === "All" ? "text-blue-500" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveFilter("Active")}
          className={` hover:cursor-pointer hover:text-black dark:hover:text-white ${activeFilter === "Active" ? "text-blue-500" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveFilter("Completed")}
          className={` hover:cursor-pointer hover:text-black dark:hover:text-white ${activeFilter === "Completed" ? "text-blue-500" : ""}`}
        >
          Completed
        </button>
      </div>
    </>
  );
}

export default Filter;
