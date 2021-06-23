const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
    console.log('Generando API Key...');
    
    const apiKey = shortid.generate();

    if(!fs.existsSync(VALID_KEYS_PATH)) {
        fs.writeFileSync(VALID_KEYS_PATH, `${apiKey}${LINE_ENDING}`); 
    }
    
    else {
        const read = fs.readFileSync(VALID_KEYS_PATH, "utf8");
        fs.writeFileSync(VALID_KEYS_PATH, read + `${apiKey}${LINE_ENDING}`);
    }

    return res.status(201).json({
        apiKey
    });
};

