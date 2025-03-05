import mongoose, { Schema } from "mongoose";

const studentReportsSchema = new Schema({
  academicYear: {
    type: Number,
    required: true,
  },
  examName: {
    type: String,
    required: true,
    trim: true
  },
  subjects: [
    {
      subjectName: { type: String, required: true, trim: true },
      maxMarks: { type: Number },
      marksObtained: { type: String, required: true },
    },
  ],
  total: {
    maxMarks: { type: Number },
    marksObtained: { type: Number },
  },
  percentage: {
    marksObtained: { type: Number },
  },
  grade: {
    type: String,
  },
});

export default StudentReports = mongoose.model(
  "StudentReports",
  studentReportsSchema
);
