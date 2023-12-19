const expressHandler = require("express-async-handler");
const Contact = require(`../db_module/module`);
const { use } = require("../userRoute");

//Create user
const createuser = expressHandler(async (req,res)=>{
    console.log("The request Body:",req.body);
    const {name, age} = req.body;
    if( !name || !age){
        res.status(400);
        throw new Error("All fields are mandetory");
    }
  const contact = await Contact.create({
        name,
        age,
        user_id: req.user.id
    });
    res.status(200).json(contact);  
});

module.exports = {createuser};    
