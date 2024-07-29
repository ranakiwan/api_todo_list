 const express = require("express");
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask} = require("../services/taskServices");

// GET /tasks endpoint
router.get("/tasks", (request, response) => {
    const json = getTasks();
    return response.status(200).json(json);
});

// POST /tasks endpoint     
router.post("/tasks", (request, response) => {
    const body = request.body; // Extract request body
    const task ={title: body.title, description: body.description};
    createTask(task); // Pass the body to the createTask service
    return response.status(201).json({
        message: "Task created"
    });
});

//updates /tasks endpoint
router.put("/tasks/:id", (request, response) => {
    const body = request.body; // Extract request body
    const taskId =request.params.id
    const task ={title: body.title, description: body.description};
        const result =updateTask(task, taskId);
    if (result) {
        
        return response.status(201).json({
        message: "Task updated"
        
    });}
return response.status(404).json({message: "not found"});
});

//delete tasks
    router.delete("/tasks/:id", (request, response) => {
        const body = request.body; // Extract request body
        const taskId =request.params.id
            const result =deleteTask(taskId);
        if (result) {
            
            return response.status(201).json({
            message: "Task deleted"
            
        });}
    return response.status(404).json({message: "not found"});
    });
    
    module.exports = router;
