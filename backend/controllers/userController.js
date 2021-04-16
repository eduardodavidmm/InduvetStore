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
    const user = await User.findById(req.user._id)

    if(user) {
        _res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin, 
        })
    } else {
        res.status(404)
        throw new Error ('Usuario no encontrado')
    }
})

// @desc Register Users
// @route POST /api/users
// @access Public
const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error('El usuario ya existe')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Datos Invalidos')
    }
})

export { authUser, registerUser, getUserProfile }
