const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/passport/passport');
const bcrypt = require('bcryptjs')

module.exports = (app, db) => {
    app.post('/registerUser', (req, res, next) => {
        passport.authenticate('register', (err, user, info) => {
            if (err) {
                console.error(err);
            }
            if (info !== undefined) {
                console.error(info.message);
                res.status(403).send(info.message);
            } else {
                const data = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    birthdate:req.body.birthdate,
                    gender:req.body.gender,
                    username: user.username,
                    phonenumber:req.body.phonenumber,
                    profile_img:"user",
                    role: "user"
                };
                console.log(data);
                db.user.findOne({
                    where: {
                        username: data.username,
                    },
                }).then(user => {
                    console.log(user);
                    user
                        .update({
                            firstname: data.firstname,
                            lastname: data.lastname,
                            birthdate:data.birthdate,
                            gender:data.gender,
                            phonenumber:data.phonenumber,
                            email: data.email,
                            profile_img:data.profile_img,
                            role: data.role
                        })
                        .then(() => {
                            console.log('user created in db');
                            res.status(200).send({ message: 'user created' });
                        });
                })
                    .catch(err => {
                        console.log(err)
                    })

            }
        })(req, res, next);
    });

    app.post('/loginUser', (req, res, next) => {
        passport.authenticate('login', (err, users, info) => {
            if (err) {
                console.error(`error ${err}`);
            }
            if (info !== undefined) {
                console.error(info.message);
                if (info.message === 'bad username') {
                    res.status(401).send(info.message);
                } else {
                    res.status(403).send(info.message);
                }
            } else {
                db.user.findOne({
                    where: {
                        username: req.body.username,
                    },
                }).then(user => {
                    const token = jwt.sign({
                        id: user.id,
                        role: user.role,
                        name: `${user.firstname} ${user.lastname}`,
                        profilePic: user.profile_img
                    }, config.jwtOptions.secretOrKey, {
                        expiresIn: 3600,
                    });
                    res.status(200).send({
                        auth: true,
                        token,
                        message: 'user found & logged in',
                    });
                });
            }
        })(req, res, next);
    });
}