
import mongoose from "mongoose"

const userAiSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
        unique: true
    },

    userCount: {
        type: Number,
        required: true,
        default: 0
    },

    limit: {
        type: Number,
        required: true,
        default: 5
    },

    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },

    endDate: {
        type: Date,
        required: true
    }

})

const userAi = mongoose.model("userAiCount", userAiSchema)

export default userAi
