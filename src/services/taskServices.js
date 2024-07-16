function getTasks() {
    return {
             title: "submit the express task 1" // Task title
                 };
    
}

function createTask() {
        // Logging a message to indicate that a task has been created
        console.log("Task created");
      }
      
       // Exporting the getProducts and createProduct functions
      module.exports = {
        getTasks, // Exporting the getProducts function
        createTask // Exporting the createTask function
      };
         
