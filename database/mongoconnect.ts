import mongoose from "mongoose";

const connect = async () =>{
  try{
    await mongoose.connect("mongodb+srv://jordipelaez05:U1DQlvinbJCPxjNt@cluster0.bwbjfsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connected to mongoDB")
  }catch(error:any){
    console.log("error on connecting to mongoDB" + error.message)
  }
}
export default connect 