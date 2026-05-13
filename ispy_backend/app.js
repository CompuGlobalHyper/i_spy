const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}))

app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("app listening on port 3000!");
});