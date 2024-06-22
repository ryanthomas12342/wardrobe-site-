const mongoose = require("mongoose");

const { Schema } = mongoose;

const productScehma = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    enum: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
  },
  photo: {
    id: {
      type: String,
      required: true,
    },
    public_url: {
      type: String,
      required: true,
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Prodcut", productScehma);

module.exports = Product;
