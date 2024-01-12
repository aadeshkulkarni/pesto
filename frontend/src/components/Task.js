import React from "react";

const Task = ({ task, onTaskClicked }) => {
  const setShadowColor = (currentStatus) => {
    if (currentStatus === "To Do") {
      return "shadow-red-50";
    } else if (currentStatus === "In Progress") {
      return "shadow-blue-50";
    } else if (currentStatus === "Done") {
      return "shadow-green-50";
    }
  };
  const setTextColor = (currentStatus) => {
    if (currentStatus === "To Do") {
      return "text-red-900";
    } else if (currentStatus === "In Progress") {
      return "text-blue-900";
    } else if (currentStatus === "Done") {
      return "text-green-900";
    }
  };
  const showStatusSymbol = (currentStatus) => {
    if (currentStatus === "To Do") {
      return "🔴";
    } else if (currentStatus === "In Progress") {
      return "🔵";
    } else if (currentStatus === "Done") {
      return "🟢";
    }
  };
  return (
    <div
      onClick={()=>onTaskClicked(task)}
      key={task.title}
      className={`${setShadowColor(task.status)} hover:shadow-xl cursor-pointer shadow-lg p-4 mt-4 w-full h-[100px] rounded-lg grid grid-cols-12 bg-white text-md`}
    >
      <div className="col-span-10">
        <div className={`font-semibold py-2 ${setTextColor(task.status)}`}>{task.title}</div>
        <div className="text-gray-500 text-xs overflow-hidden truncate">{task.description}</div>
      </div>
      <div className="col-span-2 flex justify-center items-center text-sm">{/* {showStatusSymbol(task.status)} */}</div>
    </div>
  );
};

export default Task;
