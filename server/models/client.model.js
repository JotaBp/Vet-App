const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(  {
    name: String,
    surname: String,
    email: String,
    password: String,
    profilePicPath: String,
    address: String,
    phoneNumber: Number,
    status: {
      type: String,
      enum: ["acive", "inactive", "Pending Confirmation"],
      default: "Pending Confirmation",
    },
    pet: [{
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }],
    queryClient: [{
      type: Schema.Types.ObjectId,
      ref: "QueryClient"
    }], 
    vetHospital: [{
      type: Schema.Types.ObjectId,
      ref: "VetHospital"
    }], 
    citeHospital: [{
      type: Schema.Types.ObjectId,
      ref: "CiteHospital"
    }]

  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
