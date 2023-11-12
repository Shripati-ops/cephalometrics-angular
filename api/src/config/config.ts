import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
console.log(path.join(__dirname, '../../../../.env'), 'ENV2');
export const DB_CREDS = {
  mongooseUrl: {
    serverUrl: `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cephelometrics.ep8yigr.mongodb.net/?retryWrites=true&w=majority`,
    db: 'cephelometrics',
  },
};
