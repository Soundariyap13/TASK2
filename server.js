/*const express = require('express');
const db = require('./Connection/db');
const app = express();
const port = 3001;

app.use(express.json()); // Middleware for parsing JSON
app.get('/', (req, res) => {
  res.send('Welcome to the Vehicle Management API!');
});

app.get('/api/inspectors',(req,res)=>{
  db.query('SELECT * FROM inspectors', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/details', (req, res) => {
  db.query('SELECT * FROM details', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/body',(req,res)=>{
  db.query('SELECT * FROM body', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/owner',(req,res)=>{
  db.query('SELECT * FROM owner', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/brakes',(req,res)=>{
  db.query('SELECT * FROM brakes', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/bumpers',(req,res)=>{
  db.query('SELECT * FROM bumpers', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/interior',(req,res)=>{
  db.query('SELECT * FROM interior', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching data', error: err });
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/

require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');  

const app = express();
const port = 3002;
app.use(express.json());
app.use(vehicleRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Vehicle Management API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



