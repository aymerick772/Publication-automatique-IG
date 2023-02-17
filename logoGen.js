// Get the 'deepai' package here (Compatible with browser & nodejs):
//     https://www.npmjs.com/package/deepai
// All examples use JS async-await syntax, be sure to call the API inside an async function.
//     Learn more about async-await here: https://javascript.info/async-await

// Example posting a text URL:

import { setApiKey, callStandardApi, deepai } from 'deepai'; // OR include deepai.min.js as a script tag in your HTML

setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await callStandardApi("logo-generator", {
            text: "YOUR_TEXT_URL",
    });
    console.log(resp);
})()


// Example posting file picker input text (Browser only):

import deepai from 'deepai'; // OR include deepai.min.js as a script tag in your HTML

setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await callStandardApi("logo-generator", {
            text: document.getElementById('yourFileInputId'),
    });
    console.log(resp);
})()


// Example posting a local text file (Node.js only):
import { createReadStream } from 'fs';

import deepai from 'deepai'; // OR include deepai.min.js as a script tag in your HTML

setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await callStandardApi("logo-generator", {
            text: createReadStream("/path/to/your/file.txt"),
    });
    console.log(resp);
})()


// Example directly sending a text string:

import deepai from 'deepai'; // OR include deepai.min.js as a script tag in your HTML

setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await callStandardApi("logo-generator", {
            text: "YOUR_TEXT_HERE",
    });
    console.log(resp);
})()