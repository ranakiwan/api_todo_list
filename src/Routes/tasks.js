 const express = require("express");
const router = express.Router();
const { getTasks, createTask } = require("../services/taskServices");

// GET /tasks endpoint
router.get("/tasks", (request, response) => {
    console.log("Received a request for /tasks");
    const json = getTasks();
    return response.status(200).json(json);
});

// POST /tasks endpoint
router.post("/tasks", (request, response) => {
    const body = request.body; // Extract request body
    createTask(body); // Pass the body to the createTask service
    return response.status(201).json({
        message: "Task created"
    });
});

//updates /tasks endpoint
router.put("/tasks", (request, response) => {
    const body = request.body; // Extract request body
    console.log(body.title); // Log the task title to console
    return response.status(201).json({
        message: "Task updated"
    });
});

//delete tasks
router.delete("/tasks", (request, response) => {
    const body = request.body; // Extract request body
    console.log(body.title); // Log the task title to console
    return response.status(201).json({
        message: "Task deleted"
    });
});
module.exports = router;
