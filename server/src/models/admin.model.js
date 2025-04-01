import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    adminId: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.plugin(passportLocalMongoose);

export const Admin = mongoose.model("Admin", adminSchema);
