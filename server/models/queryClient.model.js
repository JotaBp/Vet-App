const mongoose = require("mongoose")
const Schema = mongoose.Schema

const queryClientSchema = new Schema({
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
    status: {
        type: String,
        enum: ["pending-client", "closed", "scheduled", "pending-answer"],
        default: "pending-answer"
    },
    answer: [String]

}, {
    timestamps: true
})

const QueryClient = mongoose.model("QueryClient", queryClientSchema)

module.exports = QueryClient