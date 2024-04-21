// Import required modules
const express = require('express');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle incoming messages
app.post('/webhook', (req, res) => {
    const message = req.body.message;

    // Chatbot logic: Simple response based on message content
    let responseMessage = '';
    if (message.toLowerCase().includes('hello')) {
        responseMessage = 'Hi there!';
    } else if (message.toLowerCase().includes('how are you')) {
        responseMessage = 'I\'m doing well, thank you!';
    } else {
        responseMessage = 'I\'m sorry, I didn\'t understand that.';
    }

    // Send response
    const response = {
        message: responseMessage
    };
    res.json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
