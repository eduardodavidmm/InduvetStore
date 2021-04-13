import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.statsWith('Bearer'))
    {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user =
            
            next()

        } catch (error) {

        }
    }

    if(!token) {
        res.status(401)
        throw new Error('No autorizado, sin token')
    }
    
})

export { protect }