import { StatusCodes } from "http-status-codes";
import User from "../models/userModel"

export const register =async(req,res)=>{
    await User.create(req.body);
    res.status(StatusCodes.CREATED).json({msg:'User created successfully'});
}
export const login =(req,res)=>{}