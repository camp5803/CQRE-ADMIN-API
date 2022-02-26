// @deprecated

const axios = require('axios');
const qs = require('querystring');
const passport = require('passport');
const { jwtSecret } = require('../config/secret');

const getTokenFromMainServer = async (req, res) => {
    // axios.post("https://api.cqre.kr/api/v1/auth/login", qs.stringify({
    //     email: req.body.email,
    //     password: req.body.password
    // }))
    //     .then(response => {
    //         res.json({
    //             data: response.data,
    //             token: response.headers.authorization
    //         }).end();
    //     }).catch(e => {
    //         console.error(e);
    // })
    //
    // return;
    try {
        const result = await axios.post("https://api.cqre.kr/api/v1/auth/login", qs.stringify({
            email: req.body.email,
            password: req.body.password
        }));

        return res.json({
            status: "success",
            data: result.data,
            token: result.headers.authorization
        });
    } catch (e) {
        return res.status(e.response.status).json({
            status: "error",
            message: e.response.data.message
        });
    }
}

const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (user) {
            req.user = user.toJSON();
            next();
        } else {
            console.log(err);
            return res.status(401).json({
                status: "error",
                message: "Login failed"
            });
        }
    })(req, res);
}

module.exports = {
    getToken: getTokenFromMainServer,
    isAuthenticated
}