import { ObjectId } from 'bson';
import AngleModel from '../models/cephelometrics/angleSchema';
import cephMasterModel from '../models/cephelometrics/cephMasterSchema';
import LineModel from '../models/cephelometrics/linesSchema';
import pointModel from '../models/cephelometrics/pointsSchema';
const cephLogicHandler = {
  listAllImages: async () => {
    const all_xrays: Array<any> = await cephMasterModel.find().select('-__v');
    return all_xrays;
  },
  uploadData: async (payload: any) => {
    if (payload.dataURl != null || payload.dataURl != undefined) {
      const newDataImageURl = payload.dataURl.replace(/['"]/g, '');
      const newPayload = {
        dataImage: newDataImageURl,
        xrayName: payload.fileName,
      };
      const res: any = await cephMasterModel
        .create(newPayload)
        .then((result) => {
          return result;
        })
        .catch((err) => console.log(err));
      return { message: 'data inserted successfully', data: res._id };
    } else {
      console.log('Payload is not available');
    }
  },
  uploadCephData: async (payload: any) => {
    let pointData: any = {};
    let lineData: any = {};
    let angle_info: any = {};
    let magnificationCalibration: number;

    pointData = payload.points;
    lineData = payload.lines;
    angle_info = payload.angles;
    magnificationCalibration = payload.magnificationCalibration;
    // Object.keys(pointData).forEach((element:any) => {
    //     console.log(element)
    //     // element[element]['masterObjectId'] = new ObjectId(payload.ceph_id)
    // });
    var newPointArr = [];
    for (const point in pointData) {
      pointData[point]['masterObjectId'] = new ObjectId(payload.ceph_id);
      newPointArr.push(pointData[point]);
    }
    var LineArr: any = [];
    lineData.forEach((element: any) => {
      if (element.hasOwnProperty('distance')) {
        element['masterObjectId'] = new ObjectId(payload.ceph_id);
        LineArr.push(element);
      }
    });
    var angle: any = [];
    angle_info.forEach((element: any) => {
      if (element.value != '') {
        element['masterObjectId'] = new ObjectId(payload.ceph_id);
        angle.push(element);
      }
    });
    const lineResult = await LineModel.find({
      masterObjectId: new ObjectId(payload.ceph_id),
    }).select('-__v');
    const pointResult = await pointModel
      .find({ masterObjectId: new ObjectId(payload.ceph_id) })
      .select('-__v');
    const angleResult = await AngleModel.find({
      masterObjectId: new ObjectId(payload.ceph_id),
    }).select('-__v');
    var line_resCount = 0;
    var point_resCount = 0;
    var angle_resCount = 0;
    var message = '';
    if (lineResult.length > 0) {
      LineModel.deleteMany({
        masterObjectId: new ObjectId(payload.ceph_id),
      }).exec((err) => {
        if (err) {
          console.log(err);
        }
        message += 'Deleted line';
      });
    }
    if (pointResult.length > 0) {
      pointModel
        .deleteMany({ masterObjectId: new ObjectId(payload.ceph_id) })
        .exec((err) => {
          message += 'Deleted points';
        });
    }
    if (angleResult.length > 0) {
      AngleModel.deleteMany({
        masterObjectId: new ObjectId(payload.ceph_id),
      }).exec((err) => {
        if (err) {
          console.log(err);
        }
        message += 'Deleted Points ';
      });
    }
    await LineModel.create(LineArr);
    await pointModel.create(newPointArr);
    await AngleModel.create(angle);
    await cephMasterModel.updateOne(
      { _id: new ObjectId(payload.ceph_id) },
      { $set: { magnificationCalibration: magnificationCalibration } }
    );
    return {
      line: line_resCount,
      point: point_resCount,
      angle: angle_resCount,
    };
  },

  getCephData: async (id: string) => {
    const points: Array<any> = await pointModel
      .find({ masterObjectId: id })
      .select('-__v');
    const lines: Array<any> = await LineModel.find({
      masterObjectId: id,
    }).select('-__v');
    const angles: Array<any> = await AngleModel.find({
      masterObjectId: id,
    }).select('-__v');
    const all_xrays: Array<any> = await cephMasterModel
      .find({ _id: id })
      .select('-__v');
    const allObjects = {
      points: points,
      lines: lines,
      angles: angles,
      xray_data: all_xrays,
    };
    return { message: 'Data Sent Successfully', data: allObjects };
  },
  // "updateCephData" : async(id : string) => {
  //     if()
  // }
};

export default cephLogicHandler;
