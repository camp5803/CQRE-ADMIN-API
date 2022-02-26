const passport = require('passport');
const jwt = require('../config/jwt');

const create = async (req, res) => {
    return passport.authenticate('local', { session: false }, async (err, user) => {
        if (err || !user) {
            return res.status(401).json({
                status: "error",
                message: "Login failed (LocalStrategy#1)"
            });
        }
        req.login(user, { session: false }, async err => {
            if (err) {
                return res.status(400).json({
                    status: "error",
                    message: "Login failed (LocalStrategy#2)"
                });
            }
            const data = user.toJSON();
            delete data.password;
            const accessToken = jwt.sign(data);

            return res.json({
                status: "success",
                user,
                accessToken: accessToken.token
            });
        })
    })(req, res);
}

const access = (req, res, next) => {
    return passport.authenticate('jwt', { session: false }, (err, user) => {
        if (user) {
            req.user = user.toJSON();
            next();
        } else {
            return res.status(401).json({
                status: "error",
                message: "Login failed (JWTStrategy#1)"
            });
        }
    })(req, res, next);
}

const isAuthenticated = async (req, res, next) => {
    return passport.authenticate('jwt', { session: false }, (err, user) => {
        if (user) {
            next();
        } else {
            return res.status(401).json({
                status: "error",
                message: "Login failed (JWTStrategy#2)"
            });
        }
    })(req, res, next);
}

const isAdmin = (req, res, next) => {
    if (req.user.user_type === "Admin") {
        next();
    }  else {
        return res.status(403).json({
            status: "error",
            message: "You are not an administrator"
        });
    }
}

module.exports = {
    create,
    access,
    isAuthenticated,
    isAdmin
}