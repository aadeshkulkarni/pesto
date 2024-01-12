import React from "react";

const TaskForm = ({task, setTask,isNew,setNew, removeHandler, updateHandler, addHandler, DEFAULT}) => {
  return (
    <>
      <div className="my-2 text-sm">
        <label className="text-xs font-semio tracking-wide text-gray-600">Title</label>
        <input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="focus:outline-gray-100 shadow-sm rounded-lg mt-1 w-full border border-gray-50 px-2 py-3"
          type="text"
          placeholder="Pick up flowers..."
        />
      </div>
      <div className="my-2">
        <label className="my-2 text-xs font-semio tracking-wide text-gray-600">Description</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="focus:outline-gray-100 text-sm rounded-lg shadow-sm mt-1 w-full border border-gray-50 px-2 py-3"
          placeholder="Go to the meadows and buy Jasmine"
        ></textarea>
      </div>
      <div className="my-2">
        <label className="text-xs font-semio tracking-wide text-gray-600">Status</label>
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="focus-within:outline-gray-100 shadow-sm rounded-lg mt-1 text-sm w-full border border-gray-50 px-2 py-3"
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
      <div className="my-4 flex justify-end">
        {isNew ? (
          <button onClick={addHandler} className="bg-black shadow-sm text-white px-4 py-2 text-xs font-medium tracking-wide  uppercase rounded-lg">
            Add task
          </button>
        ) : (
          <div className="w-full flex items-center">
            <button
              onClick={() => {
                setTask(DEFAULT);
                setNew(true);
              }}
              className="bg-gray-800 text-white shadow-md px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-lg mx-2 "
            >
              Reset
            </button>
            <button onClick={() => removeHandler(task)} className="bg-gray-800 text-white shadow-md px-4 py-2 text-xs font-medium tracking-wide  uppercase rounded-lg">
              Delete
            </button>

            <button onClick={updateHandler} className="bg-gray-800 text-white shadow-md px-4 py-2 text-xs mx-2 font-medium tracking-wide  uppercase rounded-lg">
              Update
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskForm;
