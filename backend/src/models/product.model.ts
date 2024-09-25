import { model, Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isnew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
      defualt: "S",
    },
    images: {
      type: [String],
      default: ["img"],
    },
    isnew: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("product", productSchema);

export default Product;
