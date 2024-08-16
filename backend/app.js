// Import the express module
import express from 'express';

// Create an instance of express
const app = express();

// Define a route that sends "Hello, World!" as a response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on a specific port
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
