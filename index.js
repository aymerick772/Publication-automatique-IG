// require("dotenv").config();

import {ResultApi} from './generate.js';
import { readFile } from 'fs';
import { promisify } from 'util';
const readFileAsync = promisify(readFile);

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express()
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
import pkg from 'request-promise';
const { get } = pkg;


import { IgApiClient } from 'instagram-private-api';

import { CronJob } from "cron";


//
// async function mainTest() {
//     await ResultApi();
//   }

const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    // let urlIA = await ResultApi();
    let test = "./\img\\1673093526268.png"
    var t = `./img/test.jpg`;
    
    // console.log(urlIA);
 

    const imageBuffer = await get({
        url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        encoding: null, 
    });

    await ig.publish.photo({
        file: imageBuffer,
        caption: 'Test for coco #life #developpers',
    });

    // await ig.publish.photo({
    //     // read the file into a Buffer
    //     file: await readFileAsync(t, 'base64'),
    //     // optional, default ''
    //     caption: 'my caption',
    
    //   });

    //Ne fonctionne pas pour les photos ocales
    // ig.Upload.photo(ig,  t)
    // .then(function(upload) {
    //     // upload instanceof Client.Upload
    //     // nothing more than just keeping upload id
    //     console.log(upload.params.uploadId);
    //     return Client.Media.configurePhoto(session, upload.params.uploadId, 'akward caption');
    // })
    // .then(function(medium) {
    //     // we configure medium, it is now visible with caption
    //     console.log(medium.params)
    // })
    

}

const cronInsta = new CronJob("30 * * * * *", async () => {
    postToInsta();
});

cronInsta.start();