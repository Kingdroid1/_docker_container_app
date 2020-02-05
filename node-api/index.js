const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
require('./models/employees');

const empRouter = require('./routes/index')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://database:27017/Empstat', { useNewUrlParser: true}).then(() => 
{console.log('Database is connected') },
err => { console.log('Cannot connect to the database'+ err)}
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', empRouter);

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log('Listening on port ' + port);
})