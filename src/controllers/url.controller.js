import Urls from "../models/Urls.js";
import dotenv from 'dotenv';
import crypto from "crypto"
dotenv.config()
export async function createUrl(req,res){
    let url = req.body.url;
    let uniqueId = hashUrl(url); 
    const create_url = new Urls({
        url: url,
        shorter:uniqueId,
        date_created: new Date()
    })

    try {
        await create_url.save();
        res.status(200).json({
            shorted_url: `${process.env.HOST}/${uniqueId}`
        })
    } catch (error) {
        res.status(500).json("Error")
    }
}

export async function visitSite(req, res){
    let shorter = req.params.shorter
    let response = await Urls.findOne({
        shorter
    })
    res.redirect(response.url)
}

function hashUrl(url){
    const timestamp = Date.now().toString();
    const data = url + timestamp
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    const uniqueId = hash.slice(0,5)
    return uniqueId;
}