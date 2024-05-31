// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import routes
const indexRouter = require('./routes/index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
