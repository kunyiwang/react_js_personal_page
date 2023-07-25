const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../routes/items.js');
const {v4: uuid} = require("uuid");

app.use(express.json());
app.use('/', router);

let items = [];

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(250);
    });
});

describe('Test item creation', () => {
    test('It should create a new item', async () => {
        const newItem = {
            name: 'test',
            description: 'just a test',
            price: 1,
            image: 'https://cdn-icons-png.flaticon.com/512/2916/2916315.png'
        };

        const response = await request(app).post('/').send(newItem);
        items = response.body;
        const searchedItem = items.find(item => item.name === newItem.name);
        expect(response.statusCode).toBe(200); // Expect a successful request
        expect(searchedItem.name).toBe('test');
    });
});

describe('Test item deletion', () => {
    test('It should delete a existing item', async () => {
        testItem = items.find(item => item.name === "test");

        const response = await request(app).delete('/').send(testItem);
        items = response.body;
        const searchedItem = items.find(item => item.name === "test");
        expect(response.statusCode).toBe(200); // Expect a successful request
        expect(items).not.toContainEqual(testItem);
    });
});

// Other tests can be written similarly
