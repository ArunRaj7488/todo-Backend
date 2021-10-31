const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());

 app.use(cors());
// db module
require('./src/utils/db')
// call router
app.use("/todo", require("./src/routes/Todo.route"));

const port =  8080;
app.listen( port, ()=> console.log(`listenig on ${port}...`));
