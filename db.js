import mongoose from "mongoose";

export const connectDB  = async () => {
    await mongoose.connect('mongodb+srv://revathiram:Revram29@cluster0.kq6rm.mongodb.net/food').then(()=>console.log ("DB Connected"));
}