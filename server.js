const express = require('express');
const app = express();

const connectDB = require('./config/db')
const product = require('./routes/productroute')
const post = require('./routes/postroutes')


// app.get("/", (req, res) => {
//     res.send("jim")
// })

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", post);
app.use("/", product);

app.listen(3000, () => {
    console.log("http://localhost:3000");
    
})