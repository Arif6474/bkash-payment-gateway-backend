import { model, Schema } from 'mongoose';

const paymentSchema = new Schema({
  userId: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  trxID: {
    type: String,
  },
  paymentID: {
    type: String,
  },
  date: {
    type: String,
  },
}, { timestamps: true });

const Payment = model('payments', paymentSchema);

export default Payment;
