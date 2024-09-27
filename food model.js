import mongoose from "mongoose";

const foodSchema = new momgoose.schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel =mongoose.model.food || mongoose.model("food",foodschema);

export default foodModel;
