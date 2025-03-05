import mongoose, { Schema } from "mongoose";

const studentProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: String,
    required: true,
    trim: true,
  },
  admissionNo: {
    type: Number,
    trim: true,
    min: [1, "Please enter value greater than 1"],
  },
  admissionMonth: {
    type: String,
    enum: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  admissionYear: {
    type: Number,
    trim: true,
  },
  parentPhoneNo: {
    type: Number,
    unique: true,
    trim: true,
    required: true,
  },
  studentPhoneNo: {
    type: Number,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
    trim: true,
  },
  password: {
    type: String,
    unique: true,
    trim: true,
  },
  studentId: {
    type: String,
    unique: true,
    trim: true,
  },
});

export default StudentProfile = mongoose.model(
  "StudentProfile",
  studentProfileSchema
);
