const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }

            const {
                firstName,
                lastName,
                email,
                password,
            } = req.body;

            bcrypt.hash(password, 10, (err, hashed) => {
                console.log(hashed);
                const _user = new User({
                    firstName,
                    lastName,
                    email,
                    hash_password: hashed,
                    username: Math.random().toString(),
                });

                _user.save().then((data) => {
                    return res.status(201).json({
                        message: "User created successfully"
                    })
                }).catch((err) => {
                    console.log(err);
                    return res.status(400).json({
                        message: "Something went Wrong"
                    })
                });
            })

        }).catch(err => {
            console.log(err);
        })
};

exports.signIn = (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "Email not found"
            })
        }
        bcrypt.compare(req.body.password, user.hash_password, (err, result) => {
            if (err) {
                return res.status(400).json({
                    err
                })
            }
            if (!result) {
                return res.status(404).json({
                    message: "Invalid Password"
                })
            }
            else {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                const { _id, firstName, lastName, username, email, role, fullName } = user;
                return res.status(200).json({
                    token,
                    user: {
                        _id, firstName, lastName, username, email, role, fullName
                    }
                });
            }
        })
    }).catch(error => {
        return res.status(400).json({
            error
        })
    })
}

