import foodmodel from "../models/foodModel.js";
import fs from 'fs'


//add food item

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename }`

    const foodf = new doodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await foodf.save();
        res.json({success:true,message:"Food Added"})
    }catch (error) {
        console.log(error)
        res.json({succesas:false,message:"Error"})
    }
}

export {addFood}