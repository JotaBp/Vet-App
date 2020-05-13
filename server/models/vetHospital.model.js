const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vetHospitalSchema = new Schema(
  {
    hospitalName: String,
    address: String,
    email: String,
    password: String,
    hospitalPicPath: String,
    phoneNumber: String,
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      default: 5
    },
    chiefVetName: String,
    chiefVetSurname: String,
    collegiateNumber: String,
    status: {
      type: String,
      enum: ["active", "inactive", "Pending Confirmation"],
      default: "Pending Confirmation",
    }, 
    client: [{
      type: Schema.Types.ObjectId,
      ref: "Client"
    }],
    pet: [{
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }],
    citeHospital: [{
      type: Schema.Types.ObjectId,
      ref: "CiteHospital"
    }],
    queryClient: [{
      type: Schema.Types.ObjectId,
      ref: "QueryClient"
    }]

  },
  {
    timestamps: true,
  }
);

const VetHospital = mongoose.model("VetHospital", vetHospitalSchema);

module.exports = VetHospital;
