require("dotenv").config()
const express = require("express");
require("express-async-errors")
const router = require("./route/book-route");
const cors = require("cors");
const connect = require("./db/connect");
const errorhandler = require("./middlerware/error-handler");
const notFound = require("./middlerware/not-found");
const  helmet = require("helmet");
const app = express();

const port=5000
app.use(cors());
app.use(helmet())


// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Your API routes go here

// Serve the index.html for any other requests to support client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use("/books",router); // localhost:5000/books
yeuyhd
app.use(notFound)
app.use(errorhandler)
const start=async ()=>{
  try {
    await connect(process.env.MONGO_URI)
    app.listen(port,()=>
    console.log(`server is listening on port ${port}`))
} catch (error) {
    console.log(error)
}
}
start()
