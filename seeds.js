const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB...')
    })
    .catch(err => {
        console.error('Could not connect to MongoDB...', err)
    })

// const p = new Product({
//     name: 'Apple',
//     price: 1.99,
//     category: 'fruit',

// })
// p.save()
//     .then(p => { 
//     console.log(p)
// })
//     .catch(err => {
//     console.log(err)
// })

const seedProducts = [
    {
        name: 'Orange',
        price: 0.99,
        category: 'fruit',
    },
    {
        name: 'Banana',
        price: 0.49,
        category: 'fruit',
    },
    {
        name: 'Apple',
        price: 1.99,
        category: 'fruit',
    },
    {
        name: 'Tomato',
        price: 2.99,
        category: 'vegetable',
    },
    {
        name: 'Potato',
        price: 1.99,
        category: 'vegetable',
    },
]

Product.insertMany(seedProducts)
    .then(res => {
    console.log(res)
})
    .catch(err => {
    console.log(err)
})