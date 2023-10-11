var mongoose = require('mongoose')
var StudentSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required:[true, 'name cannot be empty'] 
        },
        dob: Date,
        gpa: {
        type: Number,
        min: 0,
        max:10
    },
        gender:{
            type:String,
            enum:['male','female']
        }, 
        image: String
    }
);
var StudentModel = mongoose.model(' student',StudentSchema,'student');
module.exports = StudentModel;