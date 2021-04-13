import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc Fetch all Users
// @route GET /api/users/login
// @access Public
const authUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Email o Contraseña Incorrecto')
    }
})

// @desc Get User Profile
// @route GET /api/users/login
// @access Public
const getUserProfile = asyncHandler( async (req, res) => {
    res.send('Success')
})

export { authUser, getUserProfile }
