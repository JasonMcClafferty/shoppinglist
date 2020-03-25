const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// tell system to look in routes/api/items
const items = require('./routes/api/items');


const app = express();

// bp middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

//connect to db
mongoose.connect(db)
.then(() => console.log('mongodb connected..', db))
.catch(err => console.log(err));

// Use routes - anything that looks in api/items 
// should refer to items variable in this file
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));



