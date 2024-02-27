/*
 * @Author: 可以清心
 * @Description: 
 * @Date: 2024-02-19 18:56:21
 * @LastEditTime: 2024-02-27 14:28:58
 */
const getIp = require("./apis/getIp");
const getLocation = require("./apis/getLocation");
const getVerificationCode = require("./apis/getVerificationCode");
const getError = require("./apis/getError");
const getMessage = require("./apis/getMessage");

module.exports = (req: any, res: any) => {  
    switch(req.body.method) {
        case 'getIp':
            getIp(req, res);
            break;
        case 'getLocation':
            getLocation(req, res);
            break;
        case 'getVerificationCode':
            getVerificationCode(req, res);
            break;
        case "error":
            getError(res);
            break;
        case "message":
            getMessage(res);
            break;
    }
}
