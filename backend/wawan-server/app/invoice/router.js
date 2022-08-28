const router = require('express').Router();
// const { policy_check } = require('../../middlewares');
const invoiceController = require('./controller');

router.get(
    '/invoices/:order_id',
    invoiceController.show
);


module.exports = router;