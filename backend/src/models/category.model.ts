import { Schema } from "mongoose";
interface ICategory {
  name: string;
  descreption: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    descreption: {
      type: String,
      default: "cateory comment",
    },
  },
  {
    timestamps: true,
  }
);
