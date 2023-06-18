var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

const items = [
    {
        id: uuid(),
        name: "Pineapple",
        description: "Sour",
        price: 10,
        image: "https://www.eatingwell.com/thmb/w7HHk8DRmM0QKmwvtP3Jd-6Vifw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pineapple-purple-background-gettyimages-932252212-hero-57df3fb128b045418c13aa1ff5c548ca.jpg"
    },
    {
        id: uuid(),
        name: "Banana",
        description: "Useful when you need quick energy supplement",
        price: 3,
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400"
    }
];

/* GET items listing. */
router.get('/', function(req, res, next) {
    res.status(250);
    return res.send(items);
});

router.post('/', function (req, res, next) {
    if (!req.body.name) {
        return res.status(400).send({ message: 'Item must have a name!' })
    }
    const item = { id: uuid(), ...req.body };
    items.push(item);
    return res.send(items);
});

module.exports = router;
