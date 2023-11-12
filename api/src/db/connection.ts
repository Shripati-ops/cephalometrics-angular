import mongoose, { ConnectOptions } from 'mongoose';
// import * as config from '../config/config.json'
import { DB_CREDS } from '../config/config';
require('dotenv').config();
export const connection = async () => {
  mongoose
    .connect(DB_CREDS.mongooseUrl.serverUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then((res) => {
      console.log(
        'Connected to Distribution API Database - Initial Connection'
      );
    })
    .catch((err) => {
      console.log(
        `${DB_CREDS.mongooseUrl.serverUrl}Initial Distribution API Database connection error occured -`,
        err
      );
    });
};
