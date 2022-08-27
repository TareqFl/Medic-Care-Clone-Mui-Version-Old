require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dbRoute = require("./routes/db")

const app = express();

app.use(cors());
app.use(express.json());
app.use(dbRoute)


mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server is running on Port: ${process.env.PORT}`)))
    .catch(err => console.log(err))

