const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB...')
    })
    .catch(err => {
        console.error('Could not connect to MongoDB...', err)
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})