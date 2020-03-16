const service = require('../services/example-service');

module.exports = {
    async saveExample(req, res) {
        try {
            await service.saveExample(req.body)
                .then(resolve => {
                    console.log(resolve);
                    return res.status(200).json(resolve);
                })
                .catch(reject => {
                    console.log(reject);
                    return res.status(400).json(reject);
                });
        } catch (error) {
            res.status(400).json({ok: false, message: 'Fail to save example, error: ' + error.message})
        }
    },
    async getExample(req, res) {
        try {
            await service.getExample()
                .then(resolve => {
                    console.log(resolve);
                    return res.status(200).json(resolve);
                })
                .catch(reject => {
                    console.log(reject);
                    return res.status(400).json(reject);
                });
        } catch (error) {
            res.status(400).json({ok: false, message: 'Fail to get example, error: ' + error.message})
        }
    }
};
