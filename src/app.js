const express = require('express');
const path = require('path'); // Make sure to require path
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files (like CSS) if needed
app.use(express.static(path.join(__dirname, process.env.STATIC_BASE)));

// Route for login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.STATIC_BASE, 'index.html'));
});

// Handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Here, you would typically validate against a database
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Invalid credentials. Please try again.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
