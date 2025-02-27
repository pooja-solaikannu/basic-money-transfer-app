import express from "express"
import jwt from "jsonwebtoken"
import { UserModel } from "../db"
import { JWT_SECRET } from "../config"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "User router working properly"
    })
})

router.post("/signup", async (req, res) => {

    const email = req.body.email
    const firstName= req.body.firstname
    const lastName = req.body.lastname
    const password = req.body.password

    if(!email || !firstName || !lastName || !password) {
        res.status(411).json({
            message: "email, firstName, lastName and password is required"
        })
        return
    }

    try {
        const newUser = new UserModel({
            email: email,
            firstName: firstName,
            lastName: lastName
        })

        //@ts-ignore
        const passwordHash = await newUser.createHash(password)
        newUser.password = passwordHash

        await newUser.save()

        const userId = newUser._id

        const token = jwt.sign({userId}, JWT_SECRET)

        res.status(200).json({
            message: "Registered sucessfully",
            token: token
        })

    } catch(err: any) {
        res.status(411).json({
            message: err
        })
    }
})

router.post("/signin", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    if(!email || !password) {
        res.status(411).json({
            message: "email and password is required to login"
        })
        return
    }

    try{
        const userFound = await UserModel.findOne({
            email: email
        })

        if(!userFound) {
            res.status(404).json({
                message: "User Not Found"
            })
            return
        }

        const userId = userFound?._id

        //@ts-ignore
        const passwordCheck = await userFound.validatePassword(password)

        if(!passwordCheck){
            res.status(404).json({
                message: "Password Incorrect"
            })
            return
        }

        const token = jwt.sign({userId}, process.env.JWT_SECRET as string)

        res.status(200).json({
            message: "Logged in successfully",
            token: token
        })

    } catch(err: any) {
        res.status(404).json({
            message: "User Not Found"
        })
    }
    
})

export default router