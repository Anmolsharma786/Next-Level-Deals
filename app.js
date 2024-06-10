// app.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;


// Import routes
const indexRouter = require('./routes/index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
