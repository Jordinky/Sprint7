import mongoose from "mongoose";
<<<<<<< HEAD
import dotenv from "dotenv"

dotenv.config()
const url = process.env.MONGO_URI ?? ''
=======
import dotenv from "dotenv";
dotenv.config()
const url = process.env.MONGO_URL ?? ''
>>>>>>> 4b0ebbe01da94a3fcbc84bae3f1eebf5bb91f93b

const connect = async () =>{
  try{
    await mongoose.connect(url)
    console.log("connected to mongoDB")
  }catch(error:any){
    console.log("error on connecting to mongoDB" + error.message)
  }
}
export default connect 