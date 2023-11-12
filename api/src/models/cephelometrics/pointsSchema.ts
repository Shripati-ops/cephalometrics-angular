import mongoose from "mongoose";
const pointSchema = new mongoose.Schema({
    masterObjectId : mongoose.Types.ObjectId, 
    pointName: String,
    x: Number,
    y: Number,
    point_name_alias: String,
    isActive : Boolean
})

const pointModel = mongoose.model('points',pointSchema);
export default pointModel;