import mongoose, { Schema} from "mongoose";

const schoolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    board: {
      type: String,
      required: true,
      trim: true,
    },
    affiliationNo: {
      type: Number,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    schooolId: {
      type: Number,
      unique: true,
    },
    classes: [{ type: Schema.Types.ObjectId, ref: "Class" }],
    admin: { type: Schema.Types.ObjectId, ref: "Admin" },
    teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
  },
  {
    timestamps: true,
  }
);
export default School = mongoose.model("School", schoolSchema);
