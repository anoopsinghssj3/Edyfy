import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  studentProfile: {
    type: Schema.Types.ObjectId,
    ref: "StudentProfile",
  },
  studentReports: [{ type: Schema.Types.ObjectId, ref: "StudentReports" }],
  studentAttendence: {
    type: Schema.Types.ObjectId,
    ref: "StudentAttendence",
  },
});
export default Student = mongoose.model("Student", studentSchema);
