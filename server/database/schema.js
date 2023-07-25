const mongoose = require('mongoose');
const { v4: uuid } = require('uuid');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.s9inkey.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// test
// create schema
const itemSchema = new mongoose.Schema({
    id: String,
    date: String,
    name: String,
    description: String,
    price: Number,
    image: String
});

// create model
const Item = mongoose.model('Item', itemSchema);

let items = [
    {
        id: uuid(),
        date: new Date(),
        name: "Pineapple",
        description: "Sour",
        price: 10,
        image: "https://www.eatingwell.com/thmb/w7HHk8DRmM0QKmwvtP3Jd-6Vifw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pineapple-purple-background-gettyimages-932252212-hero-57df3fb128b045418c13aa1ff5c548ca.jpg"
    },
    {
        id: uuid(),
        date: new Date(),
        name: "Banana",
        description: "Useful when you need quick energy supplement",
        price: 3,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400"
    }
];

Item.insertMany(items)
    .then(() => {
        console.log('Data inserted')
        // mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error)
    });


module.exports = Item;