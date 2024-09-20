import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phoneNumber: String;
  role: String;
  profile_img: String;
  address: String;
  created_at: Date;
  updated_at: Date;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "neree zaawal oruul"],
  },
  lastname: {
    type: String,
    required: [true, "owogoo zaawal oruul"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "gmail zaawal oruul"],
  },
  password: {
    type: String,
    minLength: [8, "password 8s ih temdegt baina"],
    required: [true, "password zaawal oruuls"],
  },
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  profile_img: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1726487646639-ec039193792f?q=80&w=4469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  address: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

export default User;
