const express = require('express');
const connectDatabase = require('./config/database');

const app = express();

// Connect to database
connectDatabase();

app.use(express.json({ extended: false}));


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
