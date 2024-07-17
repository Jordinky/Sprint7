import express, { Request, Response } from 'express'
import http from "http"
import connect from '../database/mongoconnect'
import messageRoutes from '../routes/message.routes'
import authRoutes from '../routes/auth.routes'
import dotenv from "dotenv";
import cors from 'cors'

import userRoutes from "../routes/user.routes"
var cookieParser = require('cookie-parser')
import {app, server} from "../socket/socket"

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
