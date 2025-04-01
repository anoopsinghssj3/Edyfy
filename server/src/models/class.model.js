import mongoose, { Schema } from "mongoose";

const classSchema = new Schema(
  {
    class: [
      {
        classCount: {
          type: Number,
          unique: true,
        },
        section: {
          type: String,
        },
        classTeacher: {
          type: Schema.Types.ObjectId,
          ref: "Teacher",
        },
      },
    ],
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  },
  {
    timestamps: true,
  }
);
export default Class = mongoose.model("Class", classSchema);
