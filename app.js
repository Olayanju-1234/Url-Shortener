const express = require('express');
const connectDatabase = require('./config/database');
const indexRouter = require('./routes/index');
const urlRouter = require('./routes/url.route');

const app = express();

// Connect to database
connectDatabase();

app.use(express.json({ extended: false}));

// Define Routes
app.use('/', indexRouter);
app.use('/api/url', urlRouter);


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
