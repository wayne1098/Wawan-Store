const router = require('express').Router();
const { policy_check } = require('../../middlewares');
const orderController = require('./controller');

router.get(
    '/orders',
    policy_check('view', 'Order'),
    orderController.index
);
router.post(
    '/orders',
    policy_check('create', 'Order'),
    orderController.store
)

module.exports = router;