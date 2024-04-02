import mongoose from "mongoose";


const itemSchema=new mongoose.Schema({
    itemName: {
        type: String,
        required: true
      },
      rate: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      discount: {
        type: Number,
        required: true
      }
})

export const Item = mongoose.model("Item",itemSchema)