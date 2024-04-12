import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    originalUrl: {
        type:String,
        required: true
    },
    shortUrl: {
        type: String
    }
},{versionKey: false});

const urlModel = mongoose.model('url', UrlSchema);

export default urlModel

