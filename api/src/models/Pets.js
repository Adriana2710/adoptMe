import mongoose from "mongoose";

const petSchema = new mongoose.Schema (
    {
        id: {type: String},
        name: {type: String, required: true},
        image: {type: String, required: true},
        gender: {type: String, required: true},
        age: {type: Number, required: true}
    }
)

const pets = mongoose.model("pets", petSchema)

export default pets