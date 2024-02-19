import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prodImg:{
        type: String,
    },
    category:{
        type: String
    },
    description:{
        type: String
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Product',prodSchema);