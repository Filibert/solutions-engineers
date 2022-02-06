import mongoose, { Document, Schema } from 'mongoose';

export interface ICourier extends Document {
  _id: number;
  max_capacity: number;
}

const courierSchema = new Schema<ICourier>({
  _id: { type: Number, required: true },
  max_capacity: { type: Number, required: true },
});

export default mongoose.model<ICourier>('User', courierSchema);