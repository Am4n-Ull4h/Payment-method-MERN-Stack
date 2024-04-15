import mongoose  from "mongoose";
// Define schema for the pricing plan
const pricingPlanSchema = new mongoose.Schema({
  packageName: {
    type: String,
    required: [true, "Package name is required"],
  },
  price: {
    type: String,
    required: [true, "Price is required"],
  },
  subscription: {
    type: String,
    required: [true, "Subscription type is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  features: [{
    type: String,
    required: true,
  }],
});

// Create a model from the schema
const PricingPlan = mongoose.model("PricingPlan", pricingPlanSchema);

export default PricingPlan;
