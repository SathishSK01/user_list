const express = require("express");
const errorHandler = require(`./middleware/errorHandling`);
const connectdb = require("./config/dbconnection");
const dotevn = require("dotenv").config();
connectdb();
const port = 8081;
const app = express();
app.use(express.json());

app.use("/api/users", require('./userRoute'));
app.use(errorHandler);

app.listen(port,()=>{
	console.log(`server listen on port ${port}`);
});
