const Product = require('../model/product')

exports.create = (req, res, next) => {
    const product = new Product(req.body)
    product.save(req.body)
        .then(v => {
            res.status(201).json(v)
        })
        .catch(next)
}

exports.update = (req, res, next) => {
    Product.init()
        .then(v => v.findByIdAndUpdate(req.params.id, req.body, { new: true }))
        .then(v => {
            res.json(v)
        })
        .catch(next)
}

exports.delete = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(204).json()
        })
        .catch(next)
}

exports.findById = (req, res, next) => {
    Product.findById(req.params.id)
        .then(v => {
            res.json(v)
        })
        .catch(next)
}

exports.countDocument = (req, res, next) => {
    Product.estimatedDocumentCount()
    .then(v => {
        res.json({counts: v})
    })
    .catch(next)
}

exports.findAll = (req, res, next) => {
    let page = Number(req.query.page);
    let limit = Number(req.query.limit || 10);
    if (page && page >= 1) {
        const skipPage = (page - 1) * limit
        delete req.query.page
        delete req.query.limit

        Product.find(req.query)
            .skip(Number(skipPage))
            .limit(limit)
            .then(v => {
                Product.countDocuments().then(total => {
                    const page = Math.ceil(total / limit)
                    res.status(200).json({
                        total: total,
                        page: page,
                        limit: limit,
                        data: v
                    });
                })
            })
            .catch(next)
    } else {
        Product.find(req.query)
            .then(v => {
                res.status(200).json(v)
            })
            .catch(next)
    }
}