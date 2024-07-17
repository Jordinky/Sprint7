import Conversation from '../models/conversation'
import Message from '../models/messages'
import { getReceiverSocketId, io } from "../socket/socket"

export const sendMessage = async (req:any,res:any) =>{
    try{
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId,recieverId]},
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,recieverId],
            })
        }
        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
            console.log(newMessage)
        }

        await Promise.all([conversation.save(),newMessage.save()])

        const receiverSocketId = getReceiverSocketId(recieverId)
        
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)
    }catch(error:any){
        res.status(500).json({"error":error.message})
    }
}

export const getMessages = async (req:any,res:any) =>{
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages")

        if(!conversation){
            res.status(200).json([])
        }
        
        const messages = conversation?.messages

        res.status(200).json(messages)

    }catch(error:any){
        console.log("error on getting messages",error.message)
        res.status({error:error.message})
    }
}