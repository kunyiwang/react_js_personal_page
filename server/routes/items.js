var express = require('express');
var router = express.Router();
const Item = require('../database/schema');
const { v4: uuid } = require('uuid');

let items = [];

/* GET items listing. */
router.get('/', async function (req, res, next) {
    res.status(250);
    items = await Item.find({});
    return res.send(items);
});

router.post('/', async function (req, res, next) {
    const item = new Item({id: uuid(), date: new Date(), ...req.body});
    items.push(item);
    await item.save();
    return res.send(items);
});

router.delete('/', async function (req, res, next) {
    if (!req.body.name) {
        return res.status(400).send({message: 'Item must have a name!'})
    }

    const id = req.body.id;
    items = items.filter(item => item.id !== id);
    await Item.findOneAndDelete({id: id});
    return res.send(items);
});

router.delete('/all', async function (req, res, next) {
    items = [];
    await Item.deleteMany({});
    return res.send(items);
});

router.patch('/', async function (req, res, next) {
    if (!req.body.id || !req.body.description) {
        return res.status(400).send({message: 'Item ID and new description must be provided!'});
    }

    const item = items.find(item => item.id === req.body.id);

    if (!item) {
        return res.status(404).send({message: 'Item not found!'});
    }

    item.description = req.body.description;
    await Item.findOneAndUpdate({id: req.body.id}, item, {new: true});

    return res.send(items);
});


module.exports = router;
