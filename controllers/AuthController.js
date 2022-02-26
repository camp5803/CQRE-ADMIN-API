const passport = require('passport');
const jwt = require('../config/jwt');
const { map } = require('../fp');

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
            const data = map(a => a.toJSON(), user);
            delete data.password;
            const accessToken = await jwt.sign(data);
            console.log(accessToken);

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

const isAuthenticated = (req, res) => {
    return passport.authenticate('jwt', { session: false }, (err, user) => {
        if (user) {
            return res.json({ status: true });
        } else {
            return res.status(401).json({
                status: "error",
                message: "Login failed (JWTStrategy#2)"
            });
        }
    })(req, res);
}

module.exports = {
    create,
    access,
    isAuthenticated
}

/*
* const password = await bcrypt.hashSync(req.body.password, 10);
        const data = await User.findOne({
            where: {
                email: req.body.email,
                password
            }
        });
* */