const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

const app = express();

// BodyParser Middleware
app.use(express.json());

// BD Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true 
    })
    .then(() => console.log('Mongo DB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/bikes', require('./routes/api/bikes'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
