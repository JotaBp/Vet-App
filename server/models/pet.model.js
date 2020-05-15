const mongoose = require("mongoose")
const Schema = mongoose.Schema

const petSchema = new Schema(   {
        name: String,
        species: String,
        petPicPath: String,
        breed: String,
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        queryClient: [{
            type: Schema.Types.ObjectId,
            ref: "QueryClient"
        }],
        vetHospital: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        citeHospital: [{
            type: Schema.Types.ObjectId,
            ref: "CiteHospital"
        }]
    },
    {
    timestamps: true
    }
)

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet