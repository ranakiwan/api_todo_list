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
    // make sure that changes did occur, and specifically only 1 change
    if(result.changes === 0){
        throw new Error('An error occured when inserting a new product');
    }
}

// function to update data in database
function updateTask(task, taskId){
    const query = " UPDATE Tasks SET title = ?, description = ? WHERE id = ? "
    const result = db.prepare(query).run(task.title, task.description, taskId)
    // return whether this one todo got changed successfully or not
    return result.changes == 1;
}

// function to delete data from database
function deleteTask(taskId){
    const query = "DELETE FROM Tasks WHERE id = ?"
    const result = db.prepare(query).run(taskId);
    // rerturn whether this one todo got removed successfully or not
    return result.changes == 1;
}

// export the functions to use in other files
module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}