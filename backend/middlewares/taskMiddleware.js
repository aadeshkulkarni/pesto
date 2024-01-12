function newTaskValidation(req, res, next) {
  
  const title = req.body.title;
  const status = req.body.status;
  if (title && status) {
    next();
  } else {
    res.status(400).json({ message: "Invalid title and status" });
  }
}

function updateTaskValidation(req, res, next) {
  const taskId = req.body._id;
  const title = req.body.title;
  const status = req.body.status;
  if (taskId) {
    if (title || status) {
      return next();
    } else {
      res.status(400).json({ message: "Invalid title / status" });
      return;
    }
  } else {
    return res.status(400).json({ message: "Invalid Task Id" });
  }
}

function deleteTaskValidation(req, res, next) {
  const taskId = req.body.taskId;
  if (taskId) {
    next();
  } else {
    res.status(400).json({ message: "Invalid Task id" });
  }
}

module.exports = { newTaskValidation, updateTaskValidation, deleteTaskValidation };
