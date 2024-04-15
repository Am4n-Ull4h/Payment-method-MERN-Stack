import express from 'express'
import { createPricingPlan, deletePricingPlan, getAllPricingDetails } from '../controllers/pricingPlan.js';

const router = express.Router();


router.post("/createCard", createPricingPlan)

router.delete("/deleteCard/:id", deletePricingPlan)
router.get("/getCard", getAllPricingDetails)


export default router;