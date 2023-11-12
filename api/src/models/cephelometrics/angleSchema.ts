import mongoose from "mongoose";
const schema = mongoose.Schema;
const angleSchema = new mongoose.Schema({
  masterObjectId: mongoose.Types.ObjectId,
  id: String,
  description: String,
  mean: Number,
  deviation: Number,
  value: String,
  interpretation: String,
  typeOfMeasurement : String,
  name : String,
  sortorder : Number
});

const AngleModel = mongoose.model('angles',angleSchema);
export default AngleModel;


