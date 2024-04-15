import PricingPlan from "../models/pricingPlanModel.js"; // Assuming the PricingPlan model is defined in 'PricingPlan.js'
import { createError } from "../utils/error.js";

// Controller to create a new pricing plan
export const createPricingPlan = async (req, res, next) => {
    try {
        // Create a new PricingPlan document using the request body
        const newPlan = new PricingPlan(req.body);
        
        // Save the new plan to the database
        const savedPlan = await newPlan.save();

        // Send the saved plan as the response
        res.status(201).json(savedPlan);
    } catch (err) {
        console.error(err); // Log the error
        next(err);
    }
};

// Get All Plan

export const getAllPricingDetails = async (req, res, next) => {
    try {
        // Fetch all pricing plans from the database
        const pricingDetails = await PricingPlan.find({});
        
        // Send the fetched pricing details as the response
        res.status(200).json(pricingDetails);
    } catch (err) {
        console.error(err); // Log the error
        next(err);
    }
};

// Controller to delete a pricing plan
export const deletePricingPlan = async (req, res, next) => {
    try {
        // Find the pricing plan by its ID and delete it
        const deletedPlan = await PricingPlan.findByIdAndDelete(req.params.id);
        
        // If the plan doesn't exist, return a 404 error
        if (!deletedPlan) {
            return next(createError(404, "Pricing plan not found"));
        }

        // Send a success message as the response
        res.status(200).json({ message: "Pricing plan deleted successfully" });
    } catch (err) {
        console.error(err); // Log the error
        next(err);
    }
};
