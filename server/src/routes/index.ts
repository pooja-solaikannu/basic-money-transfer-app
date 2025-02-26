import express from "express";
import userRoutes from "./Users"
const router = express.Router()

router.use("/users", userRoutes)

export default router
