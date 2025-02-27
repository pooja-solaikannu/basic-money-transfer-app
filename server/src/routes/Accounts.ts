import express from "express"
import { AuthMiddleware } from "../middleware"

const router = express.Router()

router.get("/", AuthMiddleware, (req, res) => {
    res.status(200).json({
        message: "Accounts health checkup"
    })
})


export default router