import express from 'express'
import dotenv from 'dotenv'
import rateLimiter from './middlewares/rateLimiter.js'
import cors from "cors";
import router from './routers/validateRouter.js'
dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(rateLimiter);
app.use('/validate', router);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})