import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    securityCode: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    adminId: {
      type: String,
      trim: true
    },
  },
  {
    timestamps: true,
  }
);

export default Admin = mongoose.model("Admin", adminSchema);
