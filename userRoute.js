const express = require("express");
const {createuser} = require('./controller/userController');
const router = express.Router();

router.post("/create", createuser);
//router.route('/').get().post();

module.exports=router;
 



