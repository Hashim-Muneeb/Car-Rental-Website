const mongoose = require("mongoose")

const userDetailsSchema = new mongoose.Schema(
    {

        fname:{ type: String, required: true},
        lname:{ type: String, required: true},
        email:{type:String, unique : true},
        password:{ type: String, required: true},
    },
    
);

 module.exports=mongoose.model("users", userDetailsSchema);
