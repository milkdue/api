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
    resp.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    resp.setHeader('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    resp.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    resp.status(200).json({code: 200, data: JSON.parse(json)});
}
