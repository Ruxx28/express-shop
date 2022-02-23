const { check } = require('express-validator');

function create() {
    return [
        check('email', 'Please enter your email').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Please enter your password').not().isEmpty(),
        check('password', 'Password more than 6 degits').isLength({ min: 8 }),
        check('phone', 'Please enter your phone').not().isEmpty(),
        check('phone', 'Invalid phone').isLength({ min: 10 })
    ];
}

function update() {
    return [
        check('email', 'Please enter your email').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('phone', 'Please enter your phone').not().isEmpty(),
        check('phone', 'Invalid phone').isLength({ min: 10 })
    ];
}

const checks = {
    update,
    create
}
module.exports = checks