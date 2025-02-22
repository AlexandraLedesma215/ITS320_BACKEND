import mongoose from 'mongoose';//import mongoose

const userSchema = mongoose.Schema({//create a new schema
    username: {//create a new field
        type: String,//set the type of the field
        required: [true, 'Please provide a username']//set the field to be required
    }
    ,email: {//create a new field
        type: String,//set the type of the field
        required: [true, 'Please provide a username']//set the field to be required
    }
   , password: {//create a new field
        type: String,//set the type of the field
        required: [true, 'Please provide a username']//set the field to be required
    }
})
//export the schema
export default mongoose.model('User', userSchema)

