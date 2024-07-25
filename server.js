const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
