import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
  profileImg: {
    type: String, //img URL from cloudinary or any media storage service
    default: "imgurl",
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

studentProfileSchema.pre("save", function (next) {
  //hash and then store password
  if (!this.isModified("password")) return next;

  this.password = bcrypt.hash(this.password, 10);
  next();
});

studentProfileSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

studentProfileSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      password: this.password,
    },
    process.env.STUDENT_ACCESS_TOKEN_SECRET,
    process.env.STUDENT_ACCESS_TOKEN_EXPIRY
  );
};

studentProfileSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.STUDENT_REFRESH_TOKEN_SECRET,
    process.env.STUDENT_REFRESH_TOKEN_EXPIRY
  );
};

export default StudentProfile = mongoose.model(
  "StudentProfile",
  studentProfileSchema
);
