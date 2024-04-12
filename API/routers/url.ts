import express from 'express'
import {UrlWithOutId} from "../types";
import urlModel from "../moduls/schema";

const urlRouter = express.Router();

urlRouter.get('/', async (req, res,next) => {
    try {
        const url = await urlModel.find()
        return  res.send(url);
    } catch (e) {
        next(e);
    }

});

urlRouter.post('/links', async (req, res,next) => {
    try {
        const urlData:UrlWithOutId = {
            originalUrl: req.body.originalUrl,
        }

        const url = new urlModel({...urlData, shortUrl: crypto.randomUUID().toString().substring(0 ,6) });
        await url.save()

        return res.send(url);
    } catch (e) {
        next(e)
    }

});

export default urlRouter;

