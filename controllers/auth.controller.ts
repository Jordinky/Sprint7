import User from "../models/user"
import { generateTokenAndSetCookie } from '../utils/tokenGenerator'

export const register = async(req:any,res:any)=>{
    try{
        const {userName,email,password} = req.body
        const user = await User.findOne({userName})
		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

        const newUser = new User ({
            userName,
            email,
            password
        })
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            console.log(newUser)
            await newUser.save();
            res.status(201).json({newUser})
        }

    }catch(error:any){
        res.status(500).json({"Error":error.message})
    }
}

export const login = async (req:any,res:any)=>{
    try{
        const {userName,password} = req.body
        const user = await User.findOne({userName})

        generateTokenAndSetCookie(user!._id, res);

        if(!user){
            res.status(401).json("Wrong email or password")
        }
        res.status(202).json({
			_id: user?._id,
			email: user?.email,
			userName: user?.userName,
		});
    }catch(error:any){
        res.status(500).json({"Error":error.message})
    }
}

export const logout = async (req:any,res:any)=>{
    try{
        res.cookie("jwt","",{ maxAge: 0});
        res.status(200).json({ message:"Succesfully logged out" })
    }catch(error:any){
        res.status(500).json({"Error":error.message})
    }
}