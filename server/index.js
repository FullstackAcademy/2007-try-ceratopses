const express = require('express')
const volleyball = require('volleyball')
const path = require('path')
//const router = require('express').Router();
const app = express();

// body parsing middleware
app.use(express.json())
app.use(volleyball)
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', require('./api')); // api routes

app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));
app.use('/aboutus', require('./routes/aboutus'));
app.use('/profile', require('./routes/profile'));
app.use('/cart', require('./routes/cart'));
app.use('/signin', require('./routes/signin'));
app.use('/signup', require('./routes/signup'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

const PORT = process.env.PORT || 3000;

const init = async() => {
  // await syncAndSeed();
  app.listen(PORT, () => {
    console.log('Listening on port ', PORT)
  })
}

init();

//module.exports = app
