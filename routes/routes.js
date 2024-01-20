// 

import { Router } from 'express';
import { bkash_auth } from '../middleware/middleware.js';
import { call_back, payment_create, refund } from '../controller/paymentController.js';


const router = Router();

router.post('/bkash/payment/create', bkash_auth, payment_create);

router.get('/bkash/payment/callback', bkash_auth, call_back);

router.get('/bkash/payment/refund/:trxID', bkash_auth, refund);

export default router;
