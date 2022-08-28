const router = require('express').Router();
const { policy_check } = require('../../middlewares');
const cartController = require('./controller');

router.get(
    '/carts',
    policy_check('read', 'Cart'),
    cartController.index
)
router.put(
    '/carts',
    policy_check('update', 'Cart'),
    cartController.update
)

module.exports = router;