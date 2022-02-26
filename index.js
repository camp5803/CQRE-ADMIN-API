const express = require('express');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport')

// configs

const secret = require('./config/secret');
const passportConfig = require('./config/passport');

const app = express();

// import sequelize models

const {sequelize} = require('./models');
const UserRoutes = require('./routes/UserRoutes');
const BookRoutes = require('./routes/BookRoutes');
const RentalRoutes = require('./routes/RentalRoutes');
// const LoginRoutes = require('./routes/LoginRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const FileRoutes = require('./routes/FileRoutes');
const ProjectRoutes = require('./routes/ProjectRoutes');
const NotificationRoutes = require('./routes/NotificationRoutes');

// use middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(hpp());
app.use(helmet());
app.use(cors(secret.corsOptions));
app.use(passport.initialize());

passportConfig();

// routes

app.use('/user', UserRoutes);
app.use('/book', BookRoutes);
app.use('/rental', RentalRoutes);
// app.use('/login', LoginRoutes);
app.use('/auth', AuthRoutes);
app.use('/file', FileRoutes);
app.use('/project', ProjectRoutes);
app.use('/notification', NotificationRoutes);

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