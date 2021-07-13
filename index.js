// require('dotenv').config();
// console.log(process.env.HOST_SERVER);
// console.log(process.env.DB_USER);
require('custom-env').env('prod')

let dbIP = process.env.HOST_SERVER;
console.log(dbIP);