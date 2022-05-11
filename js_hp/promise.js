const axios = require('axios');

function display (data)
{
    console.log (data)
}

const url = "https://twitter.com/will/tweets/1";
const prom = axios(url);


prom
.then (data=>display (data));
console.log ("me first")