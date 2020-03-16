const router = require('express').Router();

const controller = require('../controllers/example-controller');
const policy = require('../middlewares/policies/example-policy');

router.post('/save', policy.save, controller.saveExample);
router.get('/get', controller.getExample);

module.exports = router;
