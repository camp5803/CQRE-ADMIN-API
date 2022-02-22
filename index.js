const express = require('express');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');
const cors = require('cors');
const helmet = require('helmet');
const secret = require('./config/secret');

const app = express();

// import sequelize models

const {sequelize} = require('./models');
const UserRoutes = require('./routes/UserRoutes');
const BookRoutes = require('./routes/BookRoutes');
const RentalRoutes = require('./routes/RentalRoutes')

// use middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(cors(secret.corsOptions));
// app.use(isAuthenticated());

// routes

app.use('/user', UserRoutes);
app.use('/book', BookRoutes);
app.use('/rental', RentalRoutes);

// error handler

app.use((req, res, next) => {
    const err = new Error('404');
    err.status = 404;
    err.message = "Not found";
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Server error occurred",
        err
    });
});

sequelize.sync();

const server = app.listen('7908', () => {
    const address = server.address();
    const {port} = address;
    console.log(`server listening on port ${port}`);
});