const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  fname: { type: String, required: true},
  email: { type: String, unique: true },
  phone: Number,
  fromAdress: String,
  toAdress: String,
  issueDate: String,
  issueTime: String,
});

module.exports = mongoose.model("userBooking", userDetailsSchema);
