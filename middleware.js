const { request } = require("./app");

const fs = require('fs'); 
const readline = require('readline');
const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req = request, res, next) {    
    const apiKey = req.header('x-api-key');
    
    if(!apiKey) {
        return res.status(401).json({
            msg: `No se ha encontrado API Key en la petición`
        });
    }
    
    if(!fs.existsSync(VALID_KEYS_PATH)) {
        return res.status(401).json({
            msg: `No se ha encontrado archivo donde se almacenan API Keys`
        });
    } 

    const info = fs.readFileSync(VALID_KEYS_PATH, { encoding: 'utf-8' });

    let data = info.split('\n');
    let val = data.filter(d => (d.replace("\r", "") === apiKey));
  
    if(val.length === 0) {
        return res.status(401).json({
            msg: `API Key: ${apiKey} no encontrada..`
        });
    }

    return next();    
};
