import express from "express"
import cors from "cors"
import apiRoutes from "./routes/index"
import { PORT } from "./config"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1", apiRoutes)


app.listen(3000, () => {
    console.log(`SERVER is ready and listening in ${PORT}`)
})