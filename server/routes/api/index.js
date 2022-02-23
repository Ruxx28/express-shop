const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/product', require('./product'))
router.use('/admin', require('./admin'))
router.use('/category', require('./category'))
router.use('/upload', require('./upload'))
router.use('/cart', require('./cart'))
router.use('/role', require('./role'))
router.use('/shipping', require('./shipping'))
router.use('/order', require('./order'))
router.use('/webhost', require('./webhost'))
router.use('/promocode', require('./promoCode'))
router.use('/supplier', require('./supplier'))
router.use('/setting', require('./setting'))

router.use(function (err, req, res, next) {
    if (err.name === 'MongoServerError' && err.code === 11000) {
        return res.status(422).json({ err: 'There was a duplicate key error' })
    }
    if (err.name === 'ValidationError') {
        return res.status(422).json({
            err: Object.keys(err.errors).reduce(function (errors, key) {
                errors[key] = err.errors[key].message;
                return errors;
            }, {})
        });
    }
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({err: 'invalid token...'});
    }
    return next(err);
});

router.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({ 
        name: err.name,
        message: 'Something broke!' 
    })
})

module.exports = router;