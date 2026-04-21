


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Firebase has been removed as bookings now use Calendly

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory (where our HTML/CSS/JS will be)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('C:\\Users\\velip\\.gemini\\antigravity\\brain\\8db39313-2ef1-41ba-8332-abbc2e2507e3'));

// API routes for manual booking have been removed in favor of Calendly

// Catch-all route to serve the main index.html for SPA-like navigation if needed
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Serving Modern Dental Aesthetics Website');
});
