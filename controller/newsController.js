import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import fetch from 'node-fetch';
import { config } from "dotenv";

config({ path: "./config/config.env" });
const API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = process.env.API_KEY ;

async function fetchNews(country = 'in') {
    const url = `${API_URL}?country=${country}&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news' });
    }
}


export const newsController = catchAsyncError(async (req, res, next) => {

    try {
        const newsData = await fetchNews();
        res.json(newsData);
        res.status(200).json({
            success: true,
            newsData
        })
    } catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ message: 'Error fetching news' });
        }
    }


})






export default fetchNews;
