import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const url = process.env.MONGO_URL ?? ''

const connect = async () =>{
  try{
    await mongoose.connect(url)
    console.log("connected to mongoDB")
  }catch(error:any){
    console.log("error on connecting to mongoDB" + error.message)
  }
}
export default connect 