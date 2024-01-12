import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskClicked }) => {
  return (
    <>
      {tasks && tasks.length > 0 && <h3 className="px-4 font-semibold text-center tracking-wide uppercase">Task list</h3>}
      <div className="md:px-4 h-full">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => <Task key={task._id} task={task} onTaskClicked={onTaskClicked} />)
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <div className="rounded-lg tracking-wide font-thin text-sm text-gray-400">No tasks for today.</div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
