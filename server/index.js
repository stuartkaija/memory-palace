const express = require('express');
const app = express();
const cors = require('cors');
const dogRoutes = require('./routes/dogRoutes');

// middleware
app.use(express.json()); // this allows use of req.body
app.use(express.urlencoded());
app.use(cors());

// routes here
app.use("/dogs", dogRoutes);

app.listen(8080, () => {
    console.log("Listening on port 8080");
});