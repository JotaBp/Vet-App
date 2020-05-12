const mongoose = require("mongoose")
const Schema = mongoose.Schema

const queryClientSchema = new Schema(   {
        pet: {
            type: Schema.Types.ObjectId,
            ref: "Pet"
        },
        subject: String,
        description: String,
        date: Date,
        client: {
            type: Schema.Types.ObjectId,
            ref: "Client"
        },
        vetHospital: {
            type: Schema.Types.ObjectId,
            ref: "VetHospital"
        },
        citeHospital: {
            type: Schema.Types.ObjectId,
            ref: "CiteHospital"
        }
    },
    {
    timestamps: true
    }
)

const QueryClient = mongoose.model("QueryClient", queryClientSchema)

module.exports = QueryClient