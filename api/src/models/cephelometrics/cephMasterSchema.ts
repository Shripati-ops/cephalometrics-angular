import mongoose from "mongoose";

const cephMasterSchema = new mongoose.Schema({
    ceph_xray_id : Number,
    dataImage : {data: Buffer, type:String},
    xrayName: String,
    magnificationCalibration : Number
},{ timestamps: true },);

const cephMasterModel = mongoose.model('ceph_master',cephMasterSchema);

export default cephMasterModel;
