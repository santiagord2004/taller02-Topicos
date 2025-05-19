// config/s3Config.js
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: '',  //  Access Key ID
  secretAccessKey: '', // Secret Access Key
  region: ''  //The bucket region
});

module.exports = s3;