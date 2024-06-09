import express from 'express'
import { config } from "dotenv";
import cors from "cors";
import  newsRouter from "./router/newsRouter.js";

const app = express();

config({ path: "./config/config.env" })

//MIDDLEWARES 
app.use(cors({
    // origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/api/v1/news", newsRouter);


// app.use(errorMiddleware);
export default app;
