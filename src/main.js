const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3031;

// Middleware to parse JSON
app.use(express.json());

// Import and use the tasks router
const tasksRouter = require("./routes/tasks");
app.use(tasksRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on Port ${PORT}`);
});
