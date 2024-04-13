import express from "express";
import dotenv from "dotenv";
import LK_router from "./router/LK_router.js"
import rateLimiter from './middleware/rateLimiter.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(rateLimiter);

app.use("/api/lk", LK_router);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});