import express from "express";
import  {newsController}  from "../controller/newsController.js";


const router = express.Router();
router.get("/getheadlines",newsController );

export default router;