import mongoose from "mongoose";

const url = new mongoose.Schema({
    url:{
        required:true,
        type: String,
    },
    shorter:{
        required:true,
        type: String
    },
    date_created:{
        required: true,
        type: Date
    }
});

export default mongoose.model('Url',url)