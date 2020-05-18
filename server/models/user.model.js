const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  surname: String,
  email: String,
  password: String,
  profilePicPath: String,
  address: String,
  phoneNumber: String,
  status: {
    type: String,
    enum: ["active", "inactive", "Pending Confirmation"],
    default: "Pending Confirmation",
  },
  rating: {
    type: Number,
    min: 0,
    max:10,
    default: 5
  },
  hospitalPicPath: String,
  chiefVetName: String,
  chiefVetSurname: String,
  collegiateNumber: String,
  pets: [{
    type: Schema.Types.ObjectId,
    ref: "Pet"
  }],
  queryClient: [{
    type: Schema.Types.ObjectId,
    ref: "QueryClient"
  }],
  citeHospital: [{
    type: Schema.Types.ObjectId,
    ref: "CiteHospital"
  }],
  role: {
    type: String,
    enum: ['VETHOSPITAL', 'CLIENT', 'GUEST'],
    required: true,
    default: 'GUEST'
}

}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;