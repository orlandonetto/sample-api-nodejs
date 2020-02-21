const router = require('express').Router();
const exampleRouter = require('./example-router');

router.use('/example', exampleRouter);

module.exports = router;
