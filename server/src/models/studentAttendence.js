import mongoose, { Schema } from "mongoose";

const studentAttendence = new Schema(
  {
    date: String,
    studentList: [
      {
        student: {
          type: Schema.Types.ObjectId,
          ref: "StudentProfile",
        },
        attendenceVal: {
          type: Boolean,
          default: false,
        },
      },
    ],
    holiday: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default StudentAttendence = mongoose.model(
  "StudentAttendence",
  studentAttendence
);
