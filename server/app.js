// app.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const allowedOrigins = [
  'http://127.0.0.1:5173',
  'https://next-level-deals.vercel.app/'
];

// Import routes
const indexRouter = require('./index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: '*'
}));
// {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }

// Routes
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
