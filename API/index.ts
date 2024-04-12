import express from 'express';
import cors from 'cors'
import urlRouter from "./routers/url";
import mongoose from 'mongoose'
import config from "./config";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/' ,urlRouter);

const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port,() => {
        console.log(`server ${port}`)
    });

    process.on('exit', () => {
        mongoose.disconnect()
    })
}

void run()

