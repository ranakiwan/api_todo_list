const db = require("better-sqlite3")("app.db")

// function to get data from database
function getTasks(){
    const query = "SELECT * FROM Tasks"
    const result = db.prepare(query).all();
    return result;
}

// function to create data and add it to database
function createTask(task){
    const query = "INSERT INTO Tasks(title, description) VALUES(?, ?)"
    const result = db.prepare(query).run(task.title, task.description)
    if(result.changes === 0){
        throw new Error('An error occured when inserting a new product');
    }
}

// update data 
function updateTask(task, taskId){
    const query = " UPDATE Tasks SET title = ?, description = ? WHERE id = ? "
    const result = db.prepare(query).run(task.title, task.description, taskId)
    return result.changes == 1;
}

// delete data 
function deleteTask(taskId){
    const query = "DELETE FROM Tasks WHERE id = ?"
    const result = db.prepare(query).run(taskId);
    return result.changes == 1;
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}