
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  supplierName: {
    type: String,
    default: "Demonstration supplier"
  },
  indicativePriceUSD: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: { type: String, default: "" },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
