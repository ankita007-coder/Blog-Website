import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import userRouter from './routers/userRouter';
import productRouter from './routers/productRouter';
import errorMiddleware from './middlewares/errorMiddleware';
dotenv.config();


const app = express();

app.use('/user',userRouter)
app.use('/prod',productRouter)

app.use(errorMiddleware);
try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT, ()=>{
        console.log('server listening on port')
    });
} catch (error) {
    console.log(error)
}
