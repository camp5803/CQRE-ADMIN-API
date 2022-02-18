const express = require('express');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');
const cors = require('cors');
const helmet = require('helmet');

const secret = require('./config/secret');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(cors(secret.corsOptions));

app.get('/', (req, res) => {
    res.send("ok?");
});

const server = app.listen('7908', () => {
    const port = server.address().port;
    console.log("server listening on port " + port);
});