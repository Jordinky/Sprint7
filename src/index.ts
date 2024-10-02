require('dotenv').config()
import express from 'express'
import connect from '../database/mongoconnect'
import messageRoutes from '../routes/message.routes'
import dotenv from "dotenv"
import authRoutes from '../routes/auth.routes'
import userRoutes from "../routes/user.routes"
import {app, server} from "../socket/socket"

var cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/messages",messageRoutes)

server.listen(PORT, () => {
    connect()
    console.log(`Server is running on http://localhost:${PORT}`)
});
