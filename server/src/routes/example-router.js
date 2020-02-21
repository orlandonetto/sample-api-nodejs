const router = require('express').Router();

const controller = require('../app/controllers/example-controller');
const policy = require('../app/policies/example-policy');

router.post('/save', policy.save, controller.saveExample);
router.get('/get', controller.getExample);

module.exports = router;
