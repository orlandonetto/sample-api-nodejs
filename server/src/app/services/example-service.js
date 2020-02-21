const Example = require('../models/Example');

module.exports = {
    async saveExample(data) {
        return await new Promise(async (resolve, reject) => {
            try {
                const saved = await Example.create(data);

                return resolve({ok: true, message: 'Saved Successfully.', data: saved})
            } catch (error) {
                return reject({ok: true, message: 'Fail to save, error: ' + error.message})
            }
        });
    },
    async getExample() {
        return await new Promise(async (resolve, reject) => {
            try {
                const data = await Example.find();

                if (data instanceof [] && data.length < 1)
                    return resolve({ok: true, message: "Don't have a objects in database.", data});

                return resolve({ok: true, message: 'Found successfully.', data})
            } catch (error) {
                return reject({ok: true, message: 'Fail to found, error: ' + error.message})
            }
        });
    }
};
