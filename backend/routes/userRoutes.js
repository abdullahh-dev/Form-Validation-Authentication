const express = require('express');
const router = express.Router();

router.route('/createUser').post();
router.route('/updateUser').put();
router.route('/deleteUser').delete();
module.exports = router;
