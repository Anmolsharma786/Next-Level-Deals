// app.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const allowedOrigins = ['http://127.0.0.1:5173', 'https://your-deployed-react-app.vercel.app'];

// Import routes
const indexRouter = require('./index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
