const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json()); // this allows use of req.body
app.use(express.urlencoded());
app.use(cors());

// routes here



app.listen(8080, () => {
    console.log("Listening on port 8080");
})