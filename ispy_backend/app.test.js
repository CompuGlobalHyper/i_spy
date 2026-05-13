const routes = require('./routes.js')
const express = require('express')
const request = require('supertest')

const app = express()
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

test("route to index working", done => {
    request(app)
    .get('/')
    .expect("Content-Type", /json/)
    .expect({message: "Hello World!"})
    .expect(200, done)
})

test("route to test working", done => {
    request(app)
    .post('/test')
    .type('form')
    .send({ name: 'Phin' })
    .then(() => {
        request(app)
        .get('/test')
        .expect({ array: ['Phin'] }, done)
    })
})

test("checklist route working", done => {
    request(app)
    .put('/checklist')
    .send({ item: 'exampleItem' })
    .expect({ message: 'You tried to update the checklist' })
    .expect(200, done)
})