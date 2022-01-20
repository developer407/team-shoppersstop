const app = require("../index");
const connect = require("./db");

app.listen(1234,async()=>{
await connect();
console.log("listened to the port number 11011")
})
