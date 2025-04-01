import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

teacherSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next;

  this.password = bcrypt.hash(this.password, 10);
  next();
});

teacherSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

teacherSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      password: this.password,
    },
    process.env.TEACHER_ACCESS_TOKEN_SECRET,
    process.env.TEACHER_ACCESS_TOKEN_EXPIRY
  );
};

teacherSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.TEACHER_REFRESH_TOKEN_SECRET,
    process.env.TEACHER_REFRESH_TOKEN_EXPIRY
  );
};

export default Teacher = mongoose.model("Teacher", teacherSchema);
