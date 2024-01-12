import { useEffect, useState } from "react";
import { addTaskService, deleteTask, getAllTasks, updateTask } from "./network/taskService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Hero from "./components/Hero";
const DEFAULT = { title: "", description: "", status: "To Do" };

function App() {
  const [isNew, setNew] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(DEFAULT);

  async function refreshTasks() {
    try{
      const data = await getAllTasks();
      setTasks(data || []);
    }
    catch(ex){
      toast.error("Something went wrong. Perhaps your Internet is not working or our backend server is up to something")
    }
    
  }

  useEffect(() => {
    refreshTasks();
  }, []);

  const addHandler = async () => {
    try {
      if (task.title.trim() !== "") {
        const response = await addTaskService(task);
        toast.success(response.message);
        setTasks((tasks) => [...tasks, task]);
        setTask(DEFAULT);
        setShowForm(false);
        refreshTasks();
      } else {
        toast.error("Title cannot be empty!", {});
      }
    } catch (ex) {
      toast.error("Something went wrong!");
    }
  };

  const removeHandler = async (taskId) => {
    try {
      const response = await deleteTask(taskId);
      toast.success(response.message);
      refreshTasks();
      setTask(DEFAULT);
      setNew(true);
      setShowForm(false);
    } catch (ex) {
      toast.error("Something went wrong!");
    }
  };

  const updateHandler = async () => {
    try {
      const response = await updateTask(task);
      toast.success(response.message);
      refreshTasks();
      setTask(DEFAULT);
      setNew(true);
      setShowForm(false);
    } catch (ex) {
      toast.error("Something went wrong!");
    }
  };

  const onTaskClicked = (task) => {
    setNew(false);
    setTask(task);
    setShowForm(true);
  };
  return (
    <div className="font-interh-screen">
      <Header />
      <section className="flex justify-center items-center flex-col p-4 md:p-8">
        <Hero />
        <div className="w-full md:w-auto bg-gray-50 rounded-lg shadow-md grid grid-cols-12 gap-4 md:p-8 min-h-[430px]">
          <div className="w-full md:w-auto col-span-12 md:col-span-6 p-4 border-r md:border-gray-100">
            {showForm ? (
              <TaskForm
                task={task}
                setTask={setTask}
                isNew={isNew}
                setNew={setNew}
                removeHandler={removeHandler}
                updateHandler={updateHandler}
                addHandler={addHandler}
                DEFAULT={DEFAULT}
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full">
                <button className="rounded-lg uppercase tracking-wider text-xs font-normal shadow-lg px-4 py-2 border bg-pink-600 text-white" onClick={() => setShowForm(true)}>
                  Add New Task
                </button>
              </div>
            )}
          </div>
          <div className="w-full md:w-[420px] col-span-12 md:col-span-6">
            <TaskList tasks={tasks} onTaskClicked={onTaskClicked} />
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
