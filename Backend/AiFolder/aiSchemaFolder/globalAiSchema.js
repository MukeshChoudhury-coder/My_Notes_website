import mongoose from "mongoose"

const globalAiSchema=  new mongoose.Schema({
    globalCount:{
        type:Number,
        required:true,
        default:0
    },
    limit:{
        type:Number,
        required:true,
        default:10
    },
    startDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    endDate:{
        type:Date,
        required:true
    }
})
const globalAi= mongoose.model("globalAi",globalAiSchema )
export default globalAi