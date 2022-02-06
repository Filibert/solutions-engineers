import Courier from "../models/courier.model";

export interface ICreateCourierInput {
  id: number;
  max_capacity: number;
}

async function CreateCourier({
  id,
  max_capacity,
}: ICreateCourierInput): Promise<any> {
  return await Courier.findOneAndUpdate(
    {
      _id: id,
    },
    { max_capacity },
    { upsert: true, new: true }
  ).catch((error: Error) => {
    throw error;
  });
}

export default {
  CreateCourier,
};
