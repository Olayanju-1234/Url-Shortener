const express = require('express');
const connectDatabase = require('./config/database');
const indexRouter = require('./routes/index');
const urlRouter = require('./routes/url.route');
const config = require('config');

const app = express();

// Connect to database
connectDatabase();

app.use(express.json({ extended: false}));

// Define Routes
app.use('/', indexRouter);
app.use('/api/url', urlRouter);

const PORT = config.get('PORT') || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
