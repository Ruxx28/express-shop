const Upload = require('../model/upload')

exports.create = (req, res, next) => {
    const upload = new Upload(req.body)
    upload.save(req.body)
        .then(v => {
            res.status(201).json(v)
        })
        .catch(next)
}

exports.update = (req, res, next) => {
    Upload.init()
        .then(v => v.findByIdAndUpdate(req.params.id, req.body, { new: true }))
        .then(v => {
            res.json(v)
        })
        .catch(next)
}

exports.delete = (req, res, next) => {
    Upload.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(204).json()
        })
        .catch(next)
}

exports.findById = (req, res, next) => {
    Upload.findById(req.params.id)
        .then(v => {
            res.json(v)
        })
        .catch(next)
}

exports.countDocument = (req, res, next) => {
    Upload.estimatedDocumentCount()
    .then(v => {
        res.json({counts: v})
    })
    .catch(next)
}

exports.findAll = (req, res, next) => {
    let page = req.query.page;
    let limit = req.query.limit || 10;
    if (page) {
        page = parseInt(page)
        page < 1 ? page = 1 : null
        const skipPage = (page - 1) * limit
        delete req.query.page

        Upload.find(req.query)
            .skip(skipPage)
            .limit(limit)
            .then(v => {
                Upload.countDocuments().then(total => {
                    const page = Math.ceil(total / limit)
                    res.json({
                        total: total,
                        page: page,
                        limit: limit,
                        data: v
                    });
                })
            })
            .catch(next)
    } else {
        Upload.find(req.query)
            .then(v => {
                res.json(v)
            })
            .catch(next)
    }
}