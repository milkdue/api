const getIp = require("./apis/getIp");
const getLocation = require("./apis/getLocation");

module.exports = (req: any, res: any) => {  
    switch(req.body.method){
        case 'getIp':
            getIp(req, res);
            break;
        case 'getLocation':
            getLocation(req, res);
            break;
    }
}
