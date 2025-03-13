import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet('abcedfghijklmnopqrstuvwxyz1234567890',10);

export interface ProductDocument{
    title:string;
    description:string;
    price: number;
    user:UserDocument['_id'];
    image:string;
    createdAt:Date;
    updatedAt:Date;
}

export interface ProductInput extends Omit<ProductDocument, '__v' | '_id' | 'createdAt' | 'updatedAt'> {}

const productSchema = new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"User"},
    productId:{type:String, required:true, unique:true, default:()=>`product_${nanoid()}`},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true}
},{timestamps:true});



const ProductModel = mongoose.model<ProductDocument>("Product",productSchema);

export default ProductModel;