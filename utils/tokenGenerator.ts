import { type Response } from 'express'
const jwt = require('jsonwebtoken');
import type mongoose from 'mongoose'

export const generateTokenAndSetCookie = (userId: mongoose.Types.ObjectId, res: Response) => {
	const accessToken = jwt.sign({ userId }, process.env.SECRET_KEY, {
	  expiresIn: '1h'
	})
  
	res.cookie('jwt', accessToken, {
	  httpOnly: true, // la cookie solo se puede acceder desde el servidor.
	  sameSite: 'strict', // solo se puede acceder desde el mismo dominio
	  maxAge: 1000 * 60 * 60 // MS
	})
  }
