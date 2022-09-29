const http = require("http");
const getIp = require("../utils/getIp");

module.exports = function(req, res){
    const ip = getIp(req);

    sendLocation(ip, res);
}


async function sendLocation(ip, resp){
    const res = await new Promise(resolve => {
        http.get(`http://whois.pconline.com.cn/ipJson.jsp?ip=${ip}`, resolve);
    })
    
    let data = await new Promise((resolve, reject) => {
        let data = '';
    
        res.on('data', chunk => data += new TextDecoder('gbk').decode(chunk));
        res.on('error', err => reject(err));
        res.on('end', () => resolve(data));
    })
    
    let json = data.slice(39, -7);
    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.status(200).json({code: 200, data: JSON.parse(json)});
}
