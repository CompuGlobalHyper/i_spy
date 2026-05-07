const routes = require('./routes.js')
const express = require('express')
const request = require('supertest')

const app = express()
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

test("router working", done => {
    request(app)
    .get('/')
    .expect("Content-Type", /json/)
    .expect({message: "Hello World!"})
    .expect(200, done)
})