const {check, validationResult} = require('express-validator');

exports.validateSignUpRequest = [
    check("firstName").notEmpty()
    .withMessage("First Name is required"),
    check("lastName").notEmpty()
    .withMessage("Last Name is required"),
    check("email").isEmail()
    .withMessage("Valid Email is required"),
    check("password").isLength({min: 6})
    .withMessage("A password with minimum length of 6 is required")
];

exports.IsResultValid = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0) {
        return res.status(400).json({error: errors.array()[0].msg});
    }
    next();
};

exports.validateSignInRequest = [
    check("email").isEmail()
    .withMessage("Valid Email is required"),
    check("password").isLength({min: 6})
    .withMessage("A password with minimum length of 6 is required")
];