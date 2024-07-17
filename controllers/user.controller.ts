import User from "../models/user"

export const getUsers = async (req:any,res:any) =>{
    try{
        const userLogged = req.user._id

        const usersFilter = await User.find({_id: { $ne: userLogged }}).select("-password")
		
        res.status(200).json(usersFilter)
    }catch(error:any){
        console.error("error in getUsers",error.message)
        res.status(500).json({error:error.message})
    }
}