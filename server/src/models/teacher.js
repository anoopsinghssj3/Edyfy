import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: truem,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Teacher = mongoose.model("Teacher", teacherSchema);
