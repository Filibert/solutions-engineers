import { Router } from "express";
import CreateCourier from "../controllers/courier.controller";
import Courier from "../models/courier.model";

const router = Router();

router.post("/", async (req, res) => {
  const {id, max_capacity} = req.body
  if(id === undefined || max_capacity === undefined){
    res.sendStatus(400)
    return;
  }
  const courier = await CreateCourier.CreateCourier({
    id,
    max_capacity: max_capacity,
  });
  
  res.sendStatus(200);
  return;
});

router.get("/lookup/", async (req, res) => {

  const {capacity_required} = req.body

  const courier = await Courier.where('max_capacity').gte(capacity_required).find();
  res.send(courier);
  return;
});

export default router;
