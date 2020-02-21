const Joi = require('joi');

module.exports = {
    save(req, res, next) {
        const schema = {
            text: Joi.string().required(),
            number: Joi.number().required().min(1),
            bool: Joi.boolean().required()
        };

        const {error} = Joi.validate(req.body, schema);

        if (error)
            switch (error.details[0].context.key) {
                case 'text':
                    return res.status(400).json({ok: false, message: "'text' invalid."});
                case 'number':
                    return res.status(400).json({ok: false, message: "'number' invalid."});
                case 'bool':
                    return res.status(400).json({ok: false, message: "'bool' invalid."});
                default:
                    return res.status(400).json({ok: false, message: "Default error. Try again."});
            }

        next();
    }
};
