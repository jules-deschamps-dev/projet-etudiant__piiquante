const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer  = require('multer');
const path = require('path');
const helmet = require("helmet");
require('dotenv').config();

const userRoutes = require('./routes/auth');
const saucesRoutes = require('./routes/sauces');


mongoose.connect('mongodb+srv://gzor:j5QTzDGSGSq9UAN@cluster0.ggdrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use(helmet());




module.exports = app;