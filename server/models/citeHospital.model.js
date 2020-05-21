const mongoose = require("mongoose")
const Schema = mongoose.Schema

const citeHospitalSchema = new Schema({
  pet: {
    type: Schema.Types.ObjectId,
    ref: "Pet"
  },
  subject: String,
  description: String,
  date: Date,
  vetHospital: {
    type: Schema.Types.ObjectId,
    ref: "VetHospital"
  },
  queryClient: [{
    type: Schema.Types.ObjectId,
    ref: "QueryClient"
  }]
}, {
  timestamps: true
})

const CiteHospital = mongoose.model("CiteHospital", citeHospitalSchema)

module.exports = CiteHospital