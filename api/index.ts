const getIp = require("./apis/getIp");
const getLocation = require("./apis/getLocation");
const getVerificationCode = require("./apis/getVerificationCode");

module.exports = (req: any, res: any) => {  
    switch(req.body.method){
        case 'getIp':
            getIp(req, res);
            break;
        case 'getLocation':
            getLocation(req, res);
            break;
        case 'getVerificationCode':
            getVerificationCode(req, res);
            break;
    }
}
