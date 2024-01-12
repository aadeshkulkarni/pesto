import { API_ENDPOINT } from "../constants";

async function addTaskService(task) {
  const res = await fetch(API_ENDPOINT + "/task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  return data;
}

async function getAllTasks() {
  const res = await fetch(API_ENDPOINT + "/tasks");
  const data = await res.json();
  return data;
}

async function updateTask(task) {
  const res = await fetch(API_ENDPOINT + "/task", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  return data;
}

async function deleteTask(taskId) {
  const res = await fetch(API_ENDPOINT + "/task", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskId: taskId }),
  });
  const data = await res.json();
  return data;
}

export {
  addTaskService,
  getAllTasks,
  updateTask,
  deleteTask,
}
