import mongoose from "mongoose";

const pointLinesSchema = new mongoose.Schema({
     pointName : Array<Object>
})

const PointLinesModel = mongoose.model('pointLines',pointLinesSchema);
export default PointLinesModel;