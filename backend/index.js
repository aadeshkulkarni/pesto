const express = require("express");
const cors = require('cors')
require("dotenv").config();
const { Task } = require("./db");
const { deleteTaskValidation, newTaskValidation, updateTaskValidation} = require("./middlewares/taskMiddleware")

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).json({ health: "ok" });
});

app.post("/task", newTaskValidation, async (req, res) => {
  const { title, description, status } = req.body;
  const task = new Task({ title, description, status });
  await task.save();
  return res.status(200).json({ message: "Task has been created Successfully" });
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({});
  return res.status(200).json(tasks);
});

app.put("/task", updateTaskValidation, async (req, res) => {
  const taskId = req.body._id;
  const { title, description, status } = req.body;
  await Task.findOneAndUpdate({ _id: taskId }, { $set:{title, description, status}});
  return res.status(200).json({ message: "Task has been updated successfully" });
});

app.delete("/task",deleteTaskValidation, async (req, res) => {
  const taskId = req.body.taskId;
  await Task.findOneAndDelete({ _id: taskId });
  return res.status(200).json({ message: "Task is deleted successfully" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up and running on Port ${PORT} 🚀`);
});
